import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ifg_tr_notifikasi')
export class Notifikasi {
  @PrimaryGeneratedColumn()
  notifikasi_id: number;

  @Column()
  sewa_id: number;

  @Column()
  description: string;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_date: Date;
}
