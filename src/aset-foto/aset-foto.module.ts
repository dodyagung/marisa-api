import { Module } from '@nestjs/common';
import { AsetFotoService } from './aset-foto.service';
import { AsetFotoController } from './aset-foto.controller';

@Module({
  controllers: [AsetFotoController],
  providers: [AsetFotoService]
})
export class AsetFotoModule {}
