import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PerusahaanService } from './perusahaan.service';
import { CreatePerusahaanDto } from './dto/create-perusahaan.dto';
import { UpdatePerusahaanDto } from './dto/update-perusahaan.dto';

@Controller('perusahaan')
export class PerusahaanController {
  constructor(private readonly perusahaanService: PerusahaanService) {}

  // @Post()
  // create(@Body() createPerusahaanDto: CreatePerusahaanDto) {
  //   return this.perusahaanService.create(createPerusahaanDto);
  // }

  @Get('/')
  findAll() {
    return this.perusahaanService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.perusahaanService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePerusahaanDto: UpdatePerusahaanDto) {
  //   return this.perusahaanService.update(+id, updatePerusahaanDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.perusahaanService.remove(+id);
  // }
}
