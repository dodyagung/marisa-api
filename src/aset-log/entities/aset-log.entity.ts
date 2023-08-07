import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ifg_dt_aset_log')
export class AsetLog {
  @PrimaryGeneratedColumn()
  aset_log_id: number;

  @Column()
  aset_id: number;

  @Column()
  kode_status: number;

  @Column()
  kode_status_asal: number;

  @Column()
  description: string;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_date: Date;
}
