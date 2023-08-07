import { Test, TestingModule } from '@nestjs/testing';
import { SewaController } from './sewa.controller';
import { SewaService } from './sewa.service';

describe('SewaController', () => {
  let controller: SewaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SewaController],
      providers: [SewaService],
    }).compile();

    controller = module.get<SewaController>(SewaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
