import { Injectable } from '@nestjs/common';
import { CreateProseDto } from './dto/create-prose.dto';
import { UpdateProseDto } from './dto/update-prose.dto';

@Injectable()
export class ProsesService {
  create(createProseDto: CreateProseDto) {
    return 'This action adds a new prose';
  }

  findAll() {
    return `This action returns all proses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prose`;
  }

  update(id: number, updateProseDto: UpdateProseDto) {
    return `This action updates a #${id} prose`;
  }

  remove(id: number) {
    return `This action removes a #${id} prose`;
  }
}
