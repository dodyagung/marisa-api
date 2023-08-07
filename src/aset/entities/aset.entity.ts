import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ifg_dt_aset')
export class Aset {
  @PrimaryGeneratedColumn()
  aset_id: number;

  @Column()
  kategori_id: number;

  @Column()
  perusahaan_id: number;

  @Column()
  proses_id: number;

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
}
