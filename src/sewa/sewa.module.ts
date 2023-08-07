import { Module } from '@nestjs/common';
import { SewaService } from './sewa.service';
import { SewaController } from './sewa.controller';

@Module({
  controllers: [SewaController],
  providers: [SewaService]
})
export class SewaModule {}
