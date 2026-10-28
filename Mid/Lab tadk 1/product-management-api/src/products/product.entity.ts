import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  category: string;

  @Column({ type: 'real' })
  price: number;

  @Column({ type: 'integer' })
  quantity: number;
}
