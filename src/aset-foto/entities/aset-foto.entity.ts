import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ifg_dt_aset_foto')
export class AsetFoto {
  @PrimaryGeneratedColumn()
  aset_foto_id: number;

  @Column()
  aset_id: number;

  @Column()
  filename: string;

  @Column()
  url: string;

  @Column()
  status: number;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_date: Date;

  @Column()
  last_updated_by: number;

  @UpdateDateColumn()
  last_updated_date: Date;
}
