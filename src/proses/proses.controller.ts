import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProsesService } from './proses.service';
import { UpdateProsesDto } from './dto/update-proses.dto';
import { CreateProsesDto } from './dto/create-proses.dto';

@Controller('proses')
export class ProsesController {
  constructor(private readonly prosesService: ProsesService) {}

  @Post()
  create(@Body() createProseDto: CreateProsesDto) {
    return this.prosesService.create(createProseDto);
  }

  @Get()
  findAll() {
    return this.prosesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prosesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProseDto: UpdateProsesDto) {
    return this.prosesService.update(+id, updateProseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prosesService.remove(+id);
  }
}
