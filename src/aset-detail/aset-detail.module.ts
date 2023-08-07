import { Module } from '@nestjs/common';
import { AsetDetailService } from './aset-detail.service';
import { AsetDetailController } from './aset-detail.controller';

@Module({
  controllers: [AsetDetailController],
  providers: [AsetDetailService]
})
export class AsetDetailModule {}
