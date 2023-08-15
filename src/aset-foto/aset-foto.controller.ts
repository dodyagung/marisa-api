import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AsetFotoService } from './aset-foto.service';
import { CreateAsetFotoDto } from './dto/create-aset-foto.dto';
import { UpdateAsetFotoDto } from './dto/update-aset-foto.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

@Controller('aset/foto')
export class AsetFotoController {
  constructor(private readonly asetFotoService: AsetFotoService) {}

  // @Post()
  // create(@Body() createAsetFotoDto: CreateAsetFotoDto) {
  //   return this.asetFotoService.create(createAsetFotoDto);
  // }

  // @Get()
  // findAll() {
  //   return this.asetFotoService.findAll();
  // }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.asetFotoService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateAsetFotoDto: UpdateAsetFotoDto,
  ) {
    return this.asetFotoService.update(+id, file, updateAsetFotoDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.asetFotoService.remove(+id);
  // }
}
