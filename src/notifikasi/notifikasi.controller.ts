import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotifikasiService } from './notifikasi.service';
import { CreateNotifikasiDto } from './dto/create-notifikasi.dto';
import { UpdateNotifikasiDto } from './dto/update-notifikasi.dto';

@Controller('notifikasi')
export class NotifikasiController {
  constructor(private readonly notifikasiService: NotifikasiService) {}

  @Post()
  create(@Body() createNotifikasiDto: CreateNotifikasiDto) {
    return this.notifikasiService.create(createNotifikasiDto);
  }

  @Get()
  findAll() {
    return this.notifikasiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notifikasiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotifikasiDto: UpdateNotifikasiDto) {
    return this.notifikasiService.update(+id, updateNotifikasiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notifikasiService.remove(+id);
  }
}
