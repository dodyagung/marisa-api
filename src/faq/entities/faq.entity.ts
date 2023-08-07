import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ifg_m_faq')
export class Faq {
  @PrimaryGeneratedColumn()
  faq_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  url: string;

  @Column()
  is_active: boolean;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_date: Date;
}
