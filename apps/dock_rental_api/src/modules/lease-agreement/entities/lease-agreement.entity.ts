import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'lease_agreement', schema: 'dock_rental' })
export class LeaseAgreement {

  @PrimaryGeneratedColumn()
  public id!: number;

  @PrimaryGeneratedColumn('uuid')
  public stream_id!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  public reference: string;

  @Column("int", { nullable: false })
  public dock_id: number;

  @Column("int", { nullable: false })
  public shipping_company_id: number;

  @Column({ type: 'timestamptz', nullable: false })
  public sign_date: Date;

  @Column({ type: 'timestamptz', nullable: false })
  public valid_until: Date;

  @Column("int", { nullable: false })
  public price: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public created_at: Date;
}