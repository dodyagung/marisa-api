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
    const res = this.asetRepository.insert({
      kategori_id: createAsetDto.kategori_id,
      perusahaan_id: createAsetDto.perusahaan_id,
      proses_id: 1,
      name: createAsetDto.name,
      kode_status: 2, // waiting approval
      kode_status_asal: 1, // draft
      created_by: createAsetDto.created_by,
      description: createAsetDto.description,
      kode_occupancy: createAsetDto.kode_occupancy,
    });

    return res;
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

  findOne(id: number): Promise<Aset | null> {
    return this.asetRepository.findOne({
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
      where: {
        aset_id: id,
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

  // update(id: number, updateAssetDto: UpdateAssetDto): Promise<Asset> {
  //   return `This action updates a #${id} asset`;
  // }

  remove(id: number) {
    return this.asetRepository.delete(id);
  }
}
