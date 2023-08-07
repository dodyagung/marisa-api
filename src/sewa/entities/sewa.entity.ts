import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ifg_tr_sewa')
export class Sewa {
  @PrimaryGeneratedColumn()
  sewa_id: number;

  @Column()
  aset_id: number;

  @Column()
  tgl_mulai: Date;

  @Column()
  tgl_akhir: Date;

  @Column()
  kode_status: number;

  @Column()
  description: string;

  @Column()
  dokumen_sewa: string;

  @Column()
  nama_penyewa: string;

  @Column()
  identitas_no_penyewa: string;

  @Column()
  npwp_penyewa: string;

  @Column()
  alamat_penyewa: string;

  @Column()
  kode_pos_penyewa: number;

  @Column()
  email_penyewa: string;

  @Column()
  telepon_penyewa: string;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_date: Date;
}
