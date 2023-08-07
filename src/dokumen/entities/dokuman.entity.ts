import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ifg_m_dokumen')
export class Dokuman {
  @PrimaryGeneratedColumn()
  dokumen_id: number;

  @Column()
  kategori_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  is_active: boolean;
}
