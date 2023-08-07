import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AsetService } from './aset.service';
import { CreateAsetDto } from './dto/create-aset.dto';
import { UpdateAsetDto } from './dto/update-aset.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('aset')
export class AsetController {
  constructor(private readonly asetService: AsetService) {}

  // @Post()
  // create(@Body() createAssetDto: CreateAssetDto) {
  //   return this.assetService.create(createAssetDto);
  // }

  @Get('/')
  findAll() {
    return this.asetService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.assetService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
  //   return this.assetService.update(+id, updateAssetDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.assetService.remove(+id);
  // }
}
