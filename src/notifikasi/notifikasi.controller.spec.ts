import { Test, TestingModule } from '@nestjs/testing';
import { NotifikasiController } from './notifikasi.controller';
import { NotifikasiService } from './notifikasi.service';

describe('NotifikasiController', () => {
  let controller: NotifikasiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotifikasiController],
      providers: [NotifikasiService],
    }).compile();

    controller = module.get<NotifikasiController>(NotifikasiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
