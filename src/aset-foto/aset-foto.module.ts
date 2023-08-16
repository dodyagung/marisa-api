import { Module } from '@nestjs/common';
import { AsetFotoService } from './aset-foto.service';
import { AsetFotoController } from './aset-foto.controller';
import { AsetFoto } from './entities/aset-foto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Aset } from '../aset/entities/aset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsetFoto, Aset]), ConfigModule],
  controllers: [AsetFotoController],
  providers: [AsetFotoService],
})
export class AsetFotoModule {}
