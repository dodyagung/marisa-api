import { Test, TestingModule } from '@nestjs/testing';
import { AsetFotoController } from './aset-foto.controller';
import { AsetFotoService } from './aset-foto.service';

describe('AsetFotoController', () => {
  let controller: AsetFotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsetFotoController],
      providers: [AsetFotoService],
    }).compile();

    controller = module.get<AsetFotoController>(AsetFotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
