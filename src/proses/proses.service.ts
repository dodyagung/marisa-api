import { Injectable } from '@nestjs/common';
import { UpdateProsesDto } from './dto/update-proses.dto';
import { CreateProsesDto } from './dto/create-proses.dto';

@Injectable()
export class ProsesService {
  create(createProsesDto: CreateProsesDto) {
    return 'This action adds a new prose';
  }

  findAll() {
    return `This action returns all proses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prose`;
  }

  update(id: number, updateProsesDto: UpdateProsesDto) {
    return `This action updates a #${id} prose`;
  }

  remove(id: number) {
    return `This action removes a #${id} prose`;
  }
}
