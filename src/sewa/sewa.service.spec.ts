import { Test, TestingModule } from '@nestjs/testing';
import { SewaService } from './sewa.service';

describe('SewaService', () => {
  let service: SewaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SewaService],
    }).compile();

    service = module.get<SewaService>(SewaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
