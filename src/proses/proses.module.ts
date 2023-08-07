import { Module } from '@nestjs/common';
import { ProsesService } from './proses.service';
import { ProsesController } from './proses.controller';

@Module({
  controllers: [ProsesController],
  providers: [ProsesService]
})
export class ProsesModule {}
