import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Game {
  @Column()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field(() => String, { description: 'The name of the game' })
  name: string;

  @Column()
  @Field(() => Int, { description: 'How many round should be played' })
  rounds: number;

  @Column()
  @Field(() => Int, { description: 'How many round have been played' })
  progression: number;
}
