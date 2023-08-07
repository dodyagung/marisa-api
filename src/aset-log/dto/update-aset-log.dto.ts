import { PartialType } from '@nestjs/mapped-types';
import { CreateAsetLogDto } from './create-aset-log.dto';

export class UpdateAsetLogDto extends PartialType(CreateAsetLogDto) {}
