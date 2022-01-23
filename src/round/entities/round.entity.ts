import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Round {
  @Column()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Field(() => Int, { description: 'Order of the round' })
  @Generated('increment')
  Order: number;
}
