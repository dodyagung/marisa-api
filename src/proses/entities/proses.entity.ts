import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ifg_m_proses')
export class Proses {
  @PrimaryGeneratedColumn()
  proses_id: number;

  @Column()
  status_from: number;

  @Column()
  status_to: number;

  @Column()
  description: string;

  @Column()
  jenis_proses: number;

  @Column()
  name: string;
}
