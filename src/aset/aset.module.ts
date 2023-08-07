import { Module } from '@nestjs/common';
import { AsetService } from './aset.service';
import { AsetController } from './aset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aset } from './entities/aset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aset])],
  controllers: [AsetController],
  providers: [AsetService],
})
export class AsetModule {}
