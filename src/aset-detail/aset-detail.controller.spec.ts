import { Test, TestingModule } from '@nestjs/testing';
import { AsetDetailController } from './aset-detail.controller';
import { AsetDetailService } from './aset-detail.service';

describe('AsetDetailController', () => {
  let controller: AsetDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsetDetailController],
      providers: [AsetDetailService],
    }).compile();

    controller = module.get<AsetDetailController>(AsetDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
