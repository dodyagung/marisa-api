import { Module } from '@nestjs/common';
import { AsetService } from './aset.service';
import { AsetController } from './aset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aset } from './entities/aset.entity';
import { Kategori } from 'src/kategori/entities/kategori.entity';
import { Perusahaan } from 'src/perusahaan/entities/perusahaan.entity';
import { AsetDetail } from 'src/aset-detail/entities/aset-detail.entity';
import { Status } from '../status/entities/status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Aset, Kategori, Perusahaan, AsetDetail, Status]),
  ],
  controllers: [AsetController],
  providers: [AsetService],
})
export class AsetModule {}
