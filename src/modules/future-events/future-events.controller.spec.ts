import { Test, TestingModule } from '@nestjs/testing';
import { FutureEventsController } from './future-events.controller';
import { FutureEventsService } from './future-events.service';

describe('FutureEventsController', () => {
  let controller: FutureEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FutureEventsController],
      providers: [FutureEventsService],
    }).compile();

    controller = module.get<FutureEventsController>(FutureEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
