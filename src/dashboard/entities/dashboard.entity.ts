import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('ifg_v_rekap_per_kategori')
export class RekapPerKategori {
  @PrimaryColumn()
  kategori_id: number;

  @Column()
  name: string;

  @Column()
  jml_aset: number;
}

@Entity('ifg_v_rekap_per_occupancy')
export class RekapPerOkupansi {
  @PrimaryColumn()
  kode_occupancy: number;

  @Column()
  name: string;

  @Column()
  jml_aset: number;

  @Column()
  total_nilai_aset: number;
}

@Entity('ifg_v_rekap_per_perusahaan')
export class RekapPerPerusahaan {
  @PrimaryColumn()
  perusahaan_id: number;

  @Column()
  perusahaan: string;

  @Column()
  kode: string;

  @Column()
  jml_aset: number;

  @Column()
  total_nilai_aset: number;
}
