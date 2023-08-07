import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ifg_dt_attachment')
export class Attachment {
  @PrimaryGeneratedColumn()
  attachment_id: number;

  @Column()
  dokumen_id: number;

  @Column()
  dokumen_no: number;

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
