import { Module } from '@nestjs/common';
import { AsetFotoService } from './aset-foto.service';
import { AsetFotoController } from './aset-foto.controller';
import { AsetFoto } from './entities/aset-foto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AsetFoto])],
  controllers: [AsetFotoController],
  providers: [AsetFotoService],
})
export class AsetFotoModule {}
