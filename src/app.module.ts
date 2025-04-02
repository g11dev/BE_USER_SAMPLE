import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionAuthenticationService } from './iam/authentication/session-authentication//session-authentication.service';
import { IamModule } from './iam/iam.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { FutureEventsModule } from './modules/future-events/future-events.module';
import { LocationsModule } from './modules/locations/locations.module';
import { PastEventsModule } from './modules/past-events/past-events.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { TestController } from './modules/test/test.controller';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { RedisProvider } from './providers/redis.provider';

@Module({
  imports: [
    ConfigModule.forRoot(), // means draw .env file from the root directory of the project
    PrismaModule,
    UsersModule,
    FutureEventsModule,
    PastEventsModule,
    QuestionsModule,
    CategoriesModule,
    LocationsModule,
    IamModule,
  ],
  controllers: [AppController, TestController],
  providers: [
    AppService,
    PrismaService,
    Logger,
    SessionAuthenticationService,
    UsersService,
    RedisProvider,
  ],
})
export class AppModule {}
