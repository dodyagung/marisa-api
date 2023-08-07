import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DokumenService } from './dokumen.service';
import { CreateDokumanDto } from './dto/create-dokuman.dto';
import { UpdateDokumanDto } from './dto/update-dokuman.dto';

@Controller('dokumen')
export class DokumenController {
  constructor(private readonly dokumenService: DokumenService) {}

  @Post()
  create(@Body() createDokumanDto: CreateDokumanDto) {
    return this.dokumenService.create(createDokumanDto);
  }

  @Get()
  findAll() {
    return this.dokumenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dokumenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDokumanDto: UpdateDokumanDto) {
    return this.dokumenService.update(+id, updateDokumanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dokumenService.remove(+id);
  }
}
