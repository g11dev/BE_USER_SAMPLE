import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import RedisStore from 'connect-redis';
import * as session from 'express-session';
import * as passport from 'passport';
import { redisClient } from 'src/config/redis.config';
import { CategoriesController } from 'src/modules/categories/categories.controller';
import { CategoriesModule } from 'src/modules/categories/categories.module';
import { CategoriesService } from 'src/modules/categories/categories.service';
import { FutureEventsController } from 'src/modules/future-events/future-events.controller';
import { FutureEventsModule } from 'src/modules/future-events/future-events.module';
import { FutureEventsService } from 'src/modules/future-events/future-events.service';
import { UsersService } from 'src/modules/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSerializer } from './authentication/serializers/user-serializer';
import { SessionAuthenticationController } from './authentication/session-authentication/session-authentication.controller';
import { SessionAuthenticationModule } from './authentication/session-authentication/session-authentication.module';
import { SessionAuthenticationService } from './authentication/session-authentication/session-authentication.service';
import { KeycloakStrategy } from './strategies/keycloak.strategy';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    CategoriesModule,
    FutureEventsModule,
    SessionAuthenticationModule,
  ],
  controllers: [
    SessionAuthenticationController,
    CategoriesController,
    FutureEventsController,
  ],
  providers: [
    UserSerializer,
    SessionAuthenticationService,
    KeycloakStrategy,
    CategoriesService,
    FutureEventsService,
    PrismaService,
    UsersService,
    Logger,
  ],
  exports: [IamModule],
})
export class IamModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new RedisStore({ client: redisClient }),
          secret: process.env.SESSION_SECRET || 'fallback-secret', // 🔄 Usa env con fallback
          resave: false,
          saveUninitialized: false,
          cookie: {
            path: process.env.SESSION_COOKIE_PATH || '/',
            httpOnly: process.env.SESSION_COOKIE_HTTP_ONLY === 'true',
            secure: process.env.SESSION_COOKIE_SECURE === 'true',
            maxAge: Number(process.env.SESSION_COOKIE_MAX_AGE) || 86400000,
            sameSite:
              (process.env.SESSION_COOKIE_SAME_SITE as
                | 'none'
                | 'lax'
                | 'strict') || 'none',
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
