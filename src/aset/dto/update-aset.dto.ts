import { PartialType } from '@nestjs/mapped-types';
import { CreateAsetDto } from './create-aset.dto';

export class UpdateAsetDto extends PartialType(CreateAsetDto) {}
