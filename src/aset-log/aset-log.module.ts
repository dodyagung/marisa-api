import { Module } from '@nestjs/common';
import { AsetLogService } from './aset-log.service';
import { AsetLogController } from './aset-log.controller';

@Module({
  controllers: [AsetLogController],
  providers: [AsetLogService]
})
export class AsetLogModule {}
