import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { KeycloakExceptionFilter } from './common/filters/keycloak-exception.filter';
import { PrismaClientExceptionFilter } from './common/filters/prisma-client-exception.filter';
import { RedisExceptionFilter } from './common/filters/redis-exception.filter';
import { httpsOptions } from './config/https.config';
import { redisClient } from './config/redis.config';
import { swaggerConfig } from './config/swagger.config';
import { setupKeycloak } from './iam/middleware/keycloak.middleware';

async function bootstrap() {
  const logger = new Logger('MAIN.TS');
  const app = await NestFactory.create(AppModule, { httpsOptions });

  // Validation Pipe
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Setup Keycloak prima dei filtri
  setupKeycloak(app);

  // Get HTTP adapter for Prisma filter
  const httpAdapterHost = app.get(HttpAdapterHost);

  // Configura i filtri nell'ordine corretto
  app.useGlobalFilters(
    new KeycloakExceptionFilter(),
    new RedisExceptionFilter(),
    new PrismaClientExceptionFilter(httpAdapterHost),
  );

  // CORS resolution
  const cookieParser = require('cookie-parser');
  app.use(cookieParser());
  const corsOrigins = process.env.CORS_ORIGINS?.split(',') || [];
  app.enableCors({
    origin: corsOrigins,
    credentials: true,
  });

  // SWAGGER
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger_k3p', app, document);

  // REDIS configuration
  redisClient.connect();
  logger.log('Redis client connected');

  // START SERVER
  await app.listen(3000, '0.0.0.0');
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
