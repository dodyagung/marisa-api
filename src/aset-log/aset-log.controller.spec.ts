import { Test, TestingModule } from '@nestjs/testing';
import { AsetLogController } from './aset-log.controller';
import { AsetLogService } from './aset-log.service';

describe('AsetLogController', () => {
  let controller: AsetLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsetLogController],
      providers: [AsetLogService],
    }).compile();

    controller = module.get<AsetLogController>(AsetLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
