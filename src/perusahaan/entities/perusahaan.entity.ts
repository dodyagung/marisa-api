import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ifg_m_perusahaan')
export class Perusahaan {
  @PrimaryGeneratedColumn()
  perusahaan_id: number;

  @Column()
  kode: string;

  @Column()
  name: string;

  @Column()
  telepon: string;

  @Column()
  email: string;

  @Column()
  alamat: string;
}
