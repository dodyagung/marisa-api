import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ifg_m_status')
export class Status {
  @PrimaryGeneratedColumn()
  status_id: number;

  @Column()
  name: string;

  @Column()
  tipe: string;
}
