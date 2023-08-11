import { Injectable } from '@nestjs/common';
import { CreatePerusahaanDto } from './dto/create-perusahaan.dto';
import { UpdatePerusahaanDto } from './dto/update-perusahaan.dto';
import { Perusahaan } from './entities/perusahaan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PerusahaanService {
  constructor(
    @InjectRepository(Perusahaan)
    private perusahaanRepository: Repository<Perusahaan>,
  ) {}

  create(createPerusahaanDto: CreatePerusahaanDto) {
    return 'This action adds a new perusahaan';
  }

  findAll(): Promise<Perusahaan[]> {
    return this.perusahaanRepository.find({
      select: {
        perusahaan_id: true,
        name: true,
      },
      order: {
        name: 'ASC',
      },
    });
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
