import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ifg_m_user')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  real_name: string;

  @Column()
  account_enabled: boolean;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_date: Date;

  @Column()
  last_update_by: number;

  @UpdateDateColumn()
  last_update_date: Date;

  @Column()
  perusahaan_id: number;
}
