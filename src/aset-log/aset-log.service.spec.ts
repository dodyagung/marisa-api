import { Test, TestingModule } from '@nestjs/testing';
import { AsetLogService } from './aset-log.service';

describe('AsetLogService', () => {
  let service: AsetLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsetLogService],
    }).compile();

    service = module.get<AsetLogService>(AsetLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
