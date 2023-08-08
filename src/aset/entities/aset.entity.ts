import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Kategori } from '../../kategori/entities/kategori.entity';
import { Perusahaan } from '../../perusahaan/entities/perusahaan.entity';
import { AsetDetail } from '../../aset-detail/entities/aset-detail.entity';

@Entity('ifg_dt_aset')
export class Aset {
  @PrimaryGeneratedColumn()
  aset_id: number;

  @ManyToOne(() => Kategori)
  @JoinColumn({ name: 'kategori_id' })
  kategori: Kategori;

  @ManyToOne(() => Perusahaan)
  @JoinColumn({ name: 'perusahaan_id' })
  perusahaan: Perusahaan;

  @Column()
  proses: number;

  @Column()
  name: string;

  @Column()
  kode_status: number;

  @Column()
  kode_status_asal: number;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_date: Date;

  @Column()
  last_updated_by: number;

  @UpdateDateColumn()
  last_updated_date: Date;

  @Column()
  description: string;

  @Column()
  kode_occupancy: number;

  @OneToOne(() => AsetDetail)
  @JoinColumn({ name: 'aset_id' })
  aset_detail: AsetDetail;
}
