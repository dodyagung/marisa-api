import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsetLogService } from './aset-log.service';
import { CreateAsetLogDto } from './dto/create-aset-log.dto';
import { UpdateAsetLogDto } from './dto/update-aset-log.dto';

@Controller('aset-log')
export class AsetLogController {
  constructor(private readonly asetLogService: AsetLogService) {}

  @Post()
  create(@Body() createAsetLogDto: CreateAsetLogDto) {
    return this.asetLogService.create(createAsetLogDto);
  }

  @Get()
  findAll() {
    return this.asetLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asetLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsetLogDto: UpdateAsetLogDto) {
    return this.asetLogService.update(+id, updateAsetLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asetLogService.remove(+id);
  }
}
