import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import {
  RekapPerKategori,
  RekapPerOkupansi,
  RekapPerPerusahaan,
} from './entities/dashboard.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RekapPerKategori,
      RekapPerOkupansi,
      RekapPerPerusahaan,
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
