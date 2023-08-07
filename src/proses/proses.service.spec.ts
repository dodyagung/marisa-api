import { Test, TestingModule } from '@nestjs/testing';
import { ProsesService } from './proses.service';

describe('ProsesService', () => {
  let service: ProsesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProsesService],
    }).compile();

    service = module.get<ProsesService>(ProsesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
