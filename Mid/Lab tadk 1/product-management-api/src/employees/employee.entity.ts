import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'integer' })
  age: number;

  @Column({ type: 'integer' })
  yearsOfWorking: number;
}
