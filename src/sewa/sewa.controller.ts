import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SewaService } from './sewa.service';
import { CreateSewaDto } from './dto/create-sewa.dto';
import { UpdateSewaDto } from './dto/update-sewa.dto';

@Controller('sewa')
export class SewaController {
  constructor(private readonly sewaService: SewaService) {}

  @Post()
  create(@Body() createSewaDto: CreateSewaDto) {
    return this.sewaService.create(createSewaDto);
  }

  @Get()
  findAll() {
    return this.sewaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sewaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSewaDto: UpdateSewaDto) {
    return this.sewaService.update(+id, updateSewaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sewaService.remove(+id);
  }
}
