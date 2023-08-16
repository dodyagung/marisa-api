import { Module } from '@nestjs/common';
import { AsetDetailService } from './aset-detail.service';
import { AsetDetailController } from './aset-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsetDetail } from './entities/aset-detail.entity';
import { Aset } from '../aset/entities/aset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsetDetail, Aset])],
  controllers: [AsetDetailController],
  providers: [AsetDetailService],
})
export class AsetDetailModule {}
