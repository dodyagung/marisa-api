import { Injectable } from '@nestjs/common';
import { CreateAsetDetailDto } from './dto/create-aset-detail.dto';
import { UpdateAsetDetailDto } from './dto/update-aset-detail.dto';

@Injectable()
export class AsetDetailService {
  create(createAsetDetailDto: CreateAsetDetailDto) {
    return 'This action adds a new asetDetail';
  }

  findAll() {
    return `This action returns all asetDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asetDetail`;
  }

  update(id: number, updateAsetDetailDto: UpdateAsetDetailDto) {
    return `This action updates a #${id} asetDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} asetDetail`;
  }
}
