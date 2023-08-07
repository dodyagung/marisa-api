import { PartialType } from '@nestjs/mapped-types';
import { CreateAsetDetailDto } from './create-aset-detail.dto';

export class UpdateAsetDetailDto extends PartialType(CreateAsetDetailDto) {}
