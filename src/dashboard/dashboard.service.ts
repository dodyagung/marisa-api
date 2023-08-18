import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import {
  RekapPerKategori,
  RekapPerOkupansi,
} from './entities/dashboard.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(RekapPerKategori)
    private rekapPerKategoriRepository: Repository<RekapPerKategori>,
    @InjectRepository(RekapPerOkupansi)
    private rekapPerOkupansiRepository: Repository<RekapPerOkupansi>,
  ) {}

  rekapPerKategori(): Promise<RekapPerKategori[]> {
    return this.rekapPerKategoriRepository.find();
  }

  rekapPerOkupansi(): Promise<RekapPerOkupansi[]> {
    return this.rekapPerOkupansiRepository.find();
  }

  // create(createDashboardDto: CreateDashboardDto) {
  //   return 'This action adds a new dashboard';
  // }

  // findAll() {
  //   return `This action returns all dashboard`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} dashboard`;
  // }

  // update(id: number, updateDashboardDto: UpdateDashboardDto) {
  //   return `This action updates a #${id} dashboard`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dashboard`;
  // }
}
