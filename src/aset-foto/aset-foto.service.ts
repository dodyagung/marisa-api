import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAsetFotoDto } from './dto/create-aset-foto.dto';
import { UpdateAsetFotoDto } from './dto/update-aset-foto.dto';
import { AsetFoto } from './entities/aset-foto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AsetFotoService {
  constructor(
    @InjectRepository(AsetFoto)
    private asetFotoRepository: Repository<AsetFoto>,
  ) {}

  // create(createAsetFotoDto: CreateAsetFotoDto) {
  //   return 'This action adds a new asetFoto';
  // }

  // findAll() {
  //   return `This action returns all asetFoto`;
  // }

  async findOne(id: number): Promise<AsetFoto[] | null> {
    const result = await this.asetFotoRepository.find({
      select: {
        aset_foto_id: true,
        filename: true,
        url: true,
      },
      where: {
        aset_id: id,
      },
    });

    if (result.length === 0) {
      throw new NotFoundException();
    }

    return result;
  }

  // update(id: number, updateAsetFotoDto: UpdateAsetFotoDto) {
  //   return `This action updates a #${id} asetFoto`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} asetFoto`;
  // }
}
