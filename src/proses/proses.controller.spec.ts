import { Test, TestingModule } from '@nestjs/testing';
import { ProsesController } from './proses.controller';
import { ProsesService } from './proses.service';

describe('ProsesController', () => {
  let controller: ProsesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProsesController],
      providers: [ProsesService],
    }).compile();

    controller = module.get<ProsesController>(ProsesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
