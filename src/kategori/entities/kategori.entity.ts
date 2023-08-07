import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ifg_m_kategori_aset')
export class Kategori {
  @PrimaryGeneratedColumn()
  kategori_id: number;

  @Column()
  is_detail: boolean;

  @Column()
  kategori_id_parent: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  is_active: boolean;
}
