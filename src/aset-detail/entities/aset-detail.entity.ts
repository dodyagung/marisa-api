import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ifg_dt_aset_detail')
export class AsetDetail {
  @PrimaryGeneratedColumn()
  aset_detail_id: number;

  @Column()
  aset_id: number;

  @Column()
  kode_post: number;

  @Column()
  detail_alamat: string;

  @Column()
  nilai_aset_perolehan: number;

  @Column()
  luas: number;

  @Column()
  panjang: number;

  @Column()
  lebar: number;

  @Column()
  jumlah_lantai: number;

  @Column()
  nilai_aset_sekarang: number;

  @Column()
  biaya_aset: number;

  @Column()
  nilai_depresiasi: number;

  @Column()
  tgl_perolehan: Date;
}
