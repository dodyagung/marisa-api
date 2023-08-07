import { Injectable } from '@nestjs/common';
import { CreateDokumanDto } from './dto/create-dokuman.dto';
import { UpdateDokumanDto } from './dto/update-dokuman.dto';

@Injectable()
export class DokumenService {
  create(createDokumanDto: CreateDokumanDto) {
    return 'This action adds a new dokuman';
  }

  findAll() {
    return `This action returns all dokumen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dokuman`;
  }

  update(id: number, updateDokumanDto: UpdateDokumanDto) {
    return `This action updates a #${id} dokuman`;
  }

  remove(id: number) {
    return `This action removes a #${id} dokuman`;
  }
}
