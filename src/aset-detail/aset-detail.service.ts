import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAsetDetailDto } from './dto/create-aset-detail.dto';
import { UpdateAsetDetailDto } from './dto/update-aset-detail.dto';
import { AsetDetail } from './entities/aset-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aset } from '../aset/entities/aset.entity';

@Injectable()
export class AsetDetailService {
  constructor(
    @InjectRepository(Aset)
    private asetRepository: Repository<Aset>,
    @InjectRepository(AsetDetail)
    private asetDetailRepository: Repository<AsetDetail>,
  ) {}

  create(createAsetDetailDto: CreateAsetDetailDto) {
    const res = this.asetDetailRepository.insert({
      aset_detail_id: createAsetDetailDto.aset_detail_id,
      aset_id: createAsetDetailDto.aset_id,
    });

    return res;
  }

  // findAll() {
  //   return `This action returns all asetDetail`;
  // }

  async findOne(id: number): Promise<AsetDetail | null> {
    const result = await this.asetDetailRepository.findOne({
      select: {
        aset_detail_id: true,
        kode_pos: true,
        detail_alamat: true,
        nilai_aset_perolehan: true,
        luas: true,
        panjang: true,
        lebar: true,
        jumlah_lantai: true,
        nilai_aset_sekarang: true,
        biaya_aset: true,
        nilai_depresiasi: true,
        tgl_perolehan: true,
      },
      where: {
        aset_id: id,
      },
    });

    if (result === null) {
      throw new NotFoundException();
    }

    return result;
  }

  update(id: number, updateAsetDetailDto: UpdateAsetDetailDto) {
    this.asetRepository.save({
      aset_id: id,
      kode_status: 2,
    });

    const res = this.asetDetailRepository.save({
      aset_detail_id: id,
      aset_id: id,
      kode_pos: updateAsetDetailDto.kode_pos,
      detail_alamat: updateAsetDetailDto.detail_alamat,
      nilai_aset_perolehan: updateAsetDetailDto.nilai_aset_perolehan,
      luas: updateAsetDetailDto.luas,
      panjang: updateAsetDetailDto.panjang,
      lebar: updateAsetDetailDto.lebar,
      jumlah_lantai: updateAsetDetailDto.jumlah_lantai,
      nilai_aset_sekarang: updateAsetDetailDto.nilai_aset_sekarang,
      biaya_aset: updateAsetDetailDto.biaya_aset,
      nilai_depresiasi: updateAsetDetailDto.nilai_depresiasi,
      tgl_perolehan: updateAsetDetailDto.tgl_perolehan,
    });

    return res;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} asetDetail`;
  // }
}
