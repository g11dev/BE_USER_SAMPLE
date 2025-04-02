import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PastEventsController } from './past-events.controller';
import { PastEventsService } from './past-events.service';

@Module({
  imports: [PrismaModule],
  controllers: [PastEventsController],
  providers: [PastEventsService],
})
export class PastEventsModule {}
