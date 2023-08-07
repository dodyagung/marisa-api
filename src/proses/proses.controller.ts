import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProsesService } from './proses.service';
import { CreateProseDto } from './dto/create-prose.dto';
import { UpdateProseDto } from './dto/update-prose.dto';

@Controller('proses')
export class ProsesController {
  constructor(private readonly prosesService: ProsesService) {}

  @Post()
  create(@Body() createProseDto: CreateProseDto) {
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
  update(@Param('id') id: string, @Body() updateProseDto: UpdateProseDto) {
    return this.prosesService.update(+id, updateProseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prosesService.remove(+id);
  }
}
