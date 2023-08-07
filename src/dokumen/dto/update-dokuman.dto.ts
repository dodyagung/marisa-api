import { PartialType } from '@nestjs/mapped-types';
import { CreateDokumanDto } from './create-dokuman.dto';

export class UpdateDokumanDto extends PartialType(CreateDokumanDto) {}
