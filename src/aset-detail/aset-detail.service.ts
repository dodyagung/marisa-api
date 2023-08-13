import { Injectable } from '@nestjs/common';
import { CreateAsetDetailDto } from './dto/create-aset-detail.dto';
import { UpdateAsetDetailDto } from './dto/update-aset-detail.dto';
import { AsetDetail } from './entities/aset-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsetDetailService {
  constructor(
    @InjectRepository(AsetDetail)
    private asetDetailRepository: Repository<AsetDetail>,
  ) {}

  // create(createAsetDetailDto: CreateAsetDetailDto) {
  //   return 'This action adds a new asetDetail';
  // }

  // findAll() {
  //   return `This action returns all asetDetail`;
  // }

  findOne(id: number): Promise<AsetDetail | null> {
    return this.asetDetailRepository.findOne({
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
        aset_detail_id: id,
      },
    });
  }

  // update(id: number, updateAsetDetailDto: UpdateAsetDetailDto) {
  //   return `This action updates a #${id} asetDetail`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} asetDetail`;
  // }
}
