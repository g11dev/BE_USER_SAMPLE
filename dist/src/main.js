"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const prisma_client_exception_filter_1 = require("./common/filters/prisma-client-exception.filter");
const https_config_1 = require("./config/https.config");
const redis_config_1 = require("./config/redis.config");
const swagger_config_1 = require("./config/swagger.config");
const keycloak_middleware_1 = require("./iam/middleware/keycloak.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions: https_config_1.httpsOptions });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    console.log(process.env.DATABASE_URL);
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new prisma_client_exception_filter_1.PrismaClientExceptionFilter(httpAdapter));
    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
    const corsOrigins = process.env.CORS_ORIGINS?.split(',') || [];
    app.enableCors({
        origin: corsOrigins,
        credentials: true,
    });
    const document = swagger_1.SwaggerModule.createDocument(app, swagger_config_1.swaggerConfig);
    swagger_1.SwaggerModule.setup('swagger_k3p', app, document);
    redis_config_1.redisClient.connect();
    console.log('post redis connection');
    (0, keycloak_middleware_1.setupKeycloak)(app);
    await app.listen(3000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map