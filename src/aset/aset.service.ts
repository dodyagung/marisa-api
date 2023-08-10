import { Injectable } from '@nestjs/common';
import { CreateAsetDto } from './dto/create-aset.dto';
import { UpdateAsetDto } from './dto/update-aset.dto';
import { Aset } from './entities/aset.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AsetService {
  constructor(
    @InjectRepository(Aset)
    private asetRepository: Repository<Aset>,
  ) {}

  create(createAsetDto: CreateAsetDto) {
    return 'This action adds a new asset';
  }

  findAll(): Promise<Aset[]> {
    return this.asetRepository.find({
      select: {
        aset_id: true,
        name: true,
        kategori: {
          name: true,
        },
        perusahaan: {
          name: true,
        },
        aset_detail: {
          detail_alamat: true,
        },
      },
      relations: {
        kategori: true,
        perusahaan: true,
        aset_detail: true,
      },
      order: {
        aset_id: 'DESC',
      },
    });
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
