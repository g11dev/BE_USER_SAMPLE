import { Test, TestingModule } from '@nestjs/testing';
import { PastEventsController } from './past-events.controller';
import { PastEventsService } from './past-events.service';

describe('PastEventsController', () => {
  let controller: PastEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PastEventsController],
      providers: [PastEventsService],
    }).compile();

    controller = module.get<PastEventsController>(PastEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
