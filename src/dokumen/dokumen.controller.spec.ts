import { Test, TestingModule } from '@nestjs/testing';
import { DokumenController } from './dokumen.controller';
import { DokumenService } from './dokumen.service';

describe('DokumenController', () => {
  let controller: DokumenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DokumenController],
      providers: [DokumenService],
    }).compile();

    controller = module.get<DokumenController>(DokumenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
