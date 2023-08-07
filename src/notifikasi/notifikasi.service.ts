import { Injectable } from '@nestjs/common';
import { CreateNotifikasiDto } from './dto/create-notifikasi.dto';
import { UpdateNotifikasiDto } from './dto/update-notifikasi.dto';

@Injectable()
export class NotifikasiService {
  create(createNotifikasiDto: CreateNotifikasiDto) {
    return 'This action adds a new notifikasi';
  }

  findAll() {
    return `This action returns all notifikasi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notifikasi`;
  }

  update(id: number, updateNotifikasiDto: UpdateNotifikasiDto) {
    return `This action updates a #${id} notifikasi`;
  }

  remove(id: number) {
    return `This action removes a #${id} notifikasi`;
  }
}
