import { Test, TestingModule } from '@nestjs/testing';
import { AsetFotoService } from './aset-foto.service';

describe('AsetFotoService', () => {
  let service: AsetFotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsetFotoService],
    }).compile();

    service = module.get<AsetFotoService>(AsetFotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
