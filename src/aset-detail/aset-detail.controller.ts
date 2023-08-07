import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsetDetailService } from './aset-detail.service';
import { CreateAsetDetailDto } from './dto/create-aset-detail.dto';
import { UpdateAsetDetailDto } from './dto/update-aset-detail.dto';

@Controller('aset-detail')
export class AsetDetailController {
  constructor(private readonly asetDetailService: AsetDetailService) {}

  @Post()
  create(@Body() createAsetDetailDto: CreateAsetDetailDto) {
    return this.asetDetailService.create(createAsetDetailDto);
  }

  @Get()
  findAll() {
    return this.asetDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asetDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsetDetailDto: UpdateAsetDetailDto) {
    return this.asetDetailService.update(+id, updateAsetDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asetDetailService.remove(+id);
  }
}
