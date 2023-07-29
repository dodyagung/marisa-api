import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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

  @Column()
  created_date: string;

  @Column()
  last_update_by: number;

  @Column()
  last_update_date: string;

  @Column()
  perusahaan_id: number;

  @Column({ default: true })
  isActive: boolean;
}
