import { PartialType } from '@nestjs/mapped-types';
import { CreateProsesDto } from './create-proses.dto';

export class UpdateProsesDto extends PartialType(CreateProsesDto) {}
