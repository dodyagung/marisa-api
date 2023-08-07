import { Module } from '@nestjs/common';
import { DokumenService } from './dokumen.service';
import { DokumenController } from './dokumen.controller';

@Module({
  controllers: [DokumenController],
  providers: [DokumenService]
})
export class DokumenModule {}
