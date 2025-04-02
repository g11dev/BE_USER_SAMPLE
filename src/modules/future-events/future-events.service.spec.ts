import { Test, TestingModule } from '@nestjs/testing';
import { FutureEventsService } from './future-events.service';

describe('FutureEventsService', () => {
  let service: FutureEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FutureEventsService],
    }).compile();

    service = module.get<FutureEventsService>(FutureEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
