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
import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  // @Post()
  // create(@Body() createAssetDto: CreateAssetDto) {
  //   return this.assetService.create(createAssetDto);
  // }

  @Get('/')
  findAll() {
    return this.assetService.findAll();
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
