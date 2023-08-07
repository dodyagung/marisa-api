import { PartialType } from '@nestjs/mapped-types';
import { CreatePerusahaanDto } from './create-perusahaan.dto';

export class UpdatePerusahaanDto extends PartialType(CreatePerusahaanDto) {}
