import { PartialType } from '@nestjs/mapped-types';
import { CreateSewaDto } from './create-sewa.dto';

export class UpdateSewaDto extends PartialType(CreateSewaDto) {}
