// @todo: add class-validator here

export class CreateAsetDto {
  aset_id: number;

  kategori_id: number;

  perusahaan_id: number;

  proses_id: number;

  name: string;

  kode_status: number;

  kode_status_asal: number;

  created_by: number;

  created_date: Date;

  last_updated_by: number;

  last_updated_date: Date;

  description: string;

  kode_occupancy: number;
}
