import { Module } from '@nestjs/common';
import { PerusahaanService } from './perusahaan.service';
import { PerusahaanController } from './perusahaan.controller';
import { Perusahaan } from './entities/perusahaan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Perusahaan])],
  controllers: [PerusahaanController],
  providers: [PerusahaanService],
})
export class PerusahaanModule {}
