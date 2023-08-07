import { Test, TestingModule } from '@nestjs/testing';
import { AsetDetailService } from './aset-detail.service';

describe('AsetDetailService', () => {
  let service: AsetDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsetDetailService],
    }).compile();

    service = module.get<AsetDetailService>(AsetDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
