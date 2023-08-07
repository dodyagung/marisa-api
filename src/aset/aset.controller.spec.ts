import { Test, TestingModule } from '@nestjs/testing';
import { AsetController } from './aset.controller';
import { AsetService } from './aset.service';

describe('AsetController', () => {
  let controller: AsetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsetController],
      providers: [AsetService],
    }).compile();

    controller = module.get<AsetController>(AsetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
