import { Test, TestingModule } from '@nestjs/testing';
import { PastEventsService } from './past-events.service';

describe('PastEventsService', () => {
  let service: PastEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PastEventsService],
    }).compile();

    service = module.get<PastEventsService>(PastEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
