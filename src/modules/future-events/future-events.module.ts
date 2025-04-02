import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FutureEventsController } from './future-events.controller';
import { FutureEventsService } from './future-events.service';

@Module({
  imports: [PrismaModule],
  controllers: [FutureEventsController],
  providers: [FutureEventsService],
})
export class FutureEventsModule {}
