import { Injectable } from '@nestjs/common';
import { CreatePerusahaanDto } from './dto/create-perusahaan.dto';
import { UpdatePerusahaanDto } from './dto/update-perusahaan.dto';

@Injectable()
export class PerusahaanService {
  create(createPerusahaanDto: CreatePerusahaanDto) {
    return 'This action adds a new perusahaan';
  }

  findAll() {
    return `This action returns all perusahaan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} perusahaan`;
  }

  update(id: number, updatePerusahaanDto: UpdatePerusahaanDto) {
    return `This action updates a #${id} perusahaan`;
  }

  remove(id: number) {
    return `This action removes a #${id} perusahaan`;
  }
}
