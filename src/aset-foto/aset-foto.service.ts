import { Injectable } from '@nestjs/common';
import { CreateAsetFotoDto } from './dto/create-aset-foto.dto';
import { UpdateAsetFotoDto } from './dto/update-aset-foto.dto';

@Injectable()
export class AsetFotoService {
  create(createAsetFotoDto: CreateAsetFotoDto) {
    return 'This action adds a new asetFoto';
  }

  findAll() {
    return `This action returns all asetFoto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asetFoto`;
  }

  update(id: number, updateAsetFotoDto: UpdateAsetFotoDto) {
    return `This action updates a #${id} asetFoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} asetFoto`;
  }
}
