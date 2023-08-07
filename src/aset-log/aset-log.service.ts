import { Injectable } from '@nestjs/common';
import { CreateAsetLogDto } from './dto/create-aset-log.dto';
import { UpdateAsetLogDto } from './dto/update-aset-log.dto';

@Injectable()
export class AsetLogService {
  create(createAsetLogDto: CreateAsetLogDto) {
    return 'This action adds a new asetLog';
  }

  findAll() {
    return `This action returns all asetLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asetLog`;
  }

  update(id: number, updateAsetLogDto: UpdateAsetLogDto) {
    return `This action updates a #${id} asetLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} asetLog`;
  }
}
