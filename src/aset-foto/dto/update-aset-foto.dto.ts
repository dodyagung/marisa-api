import { PartialType } from '@nestjs/mapped-types';
import { CreateAsetFotoDto } from './create-aset-foto.dto';

export class UpdateAsetFotoDto extends PartialType(CreateAsetFotoDto) {}
