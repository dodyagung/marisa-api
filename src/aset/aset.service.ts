import { Injectable, NotFoundException } from '@nestjs/common';
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
        status: {
          status_id: true,
          name: true,
        },
      },
      relations: {
        kategori: true,
        perusahaan: true,
        aset_detail: true,
        status: true,
      },
      order: {
        aset_id: 'DESC',
      },
    });
  }

  findByPerusahaan(id: number): Promise<Aset[]> {
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
        status: {
          status_id: true,
          name: true,
        },
      },
      relations: {
        kategori: true,
        perusahaan: true,
        aset_detail: true,
        status: true,
      },
      where: {
        perusahaan_id: id,
      },
      order: {
        aset_id: 'DESC',
      },
    });
  }

  async findOne(id: number): Promise<Aset | null> {
    const result = await this.asetRepository.findOne({
      select: {
        aset_id: true,
        name: true,
        description: true,
        kategori: {
          kategori_id: true,
          name: true,
        },
        perusahaan: {
          name: true,
        },
        aset_detail: {
          detail_alamat: true,
        },
        occupancy: {
          status_id: true,
          name: true,
        },
      },
      where: {
        aset_id: id,
      },
      relations: {
        kategori: true,
        perusahaan: true,
        aset_detail: true,
        occupancy: true,
      },
    });

    if (result === null) {
      throw new NotFoundException();
    }

    return result;
  }

  update(id: number, updateAssetDto: UpdateAsetDto) {
    const res = this.asetRepository.save({
      aset_id: id,
      kategori_id: updateAssetDto.kategori_id,
      name: updateAssetDto.name,
      last_updated_by: updateAssetDto.last_updated_by,
      description: updateAssetDto.description,
      kode_occupancy: updateAssetDto.kode_occupancy,
    });

    return res;
  }

  remove(id: number) {
    return this.asetRepository.delete(id);
  }
}
