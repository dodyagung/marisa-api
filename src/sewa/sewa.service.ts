import { Injectable } from '@nestjs/common';
import { CreateSewaDto } from './dto/create-sewa.dto';
import { UpdateSewaDto } from './dto/update-sewa.dto';

@Injectable()
export class SewaService {
  create(createSewaDto: CreateSewaDto) {
    return 'This action adds a new sewa';
  }

  findAll() {
    return `This action returns all sewa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sewa`;
  }

  update(id: number, updateSewaDto: UpdateSewaDto) {
    return `This action updates a #${id} sewa`;
  }

  remove(id: number) {
    return `This action removes a #${id} sewa`;
  }
}
