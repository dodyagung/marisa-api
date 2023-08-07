import { Test, TestingModule } from '@nestjs/testing';
import { AsetService } from './aset.service';

describe('AsetService', () => {
  let service: AsetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsetService],
    }).compile();

    service = module.get<AsetService>(AsetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
