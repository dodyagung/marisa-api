import { PartialType } from '@nestjs/mapped-types';
import { CreateProseDto } from './create-prose.dto';

export class UpdateProseDto extends PartialType(CreateProseDto) {}
