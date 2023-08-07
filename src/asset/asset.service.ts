import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private asetRepository: Repository<Asset>,
  ) {}

  // create(createAssetDto: CreateAssetDto) {
  //   return 'This action adds a new asset';
  // }

  findAll(): Promise<Asset[]> {
    return this.asetRepository.find();
  }

  // findOne(id: number): Promise<Asset | null> {
  //   return `This action returns a #${id} asset`;
  // }

  // update(id: number, updateAssetDto: UpdateAssetDto): Promise<Asset> {
  //   return `This action updates a #${id} asset`;
  // }

  // remove(id: number): Promise<void> {
  //   return `This action removes a #${id} asset`;
  // }
}
