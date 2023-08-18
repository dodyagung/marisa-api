import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('ifg_v_rekap_per_kategori')
export class RekapPerkategori {
  @PrimaryColumn()
  kategori_id: number;

  @Column()
  name: string;

  @Column()
  jml_aset: number;
}
