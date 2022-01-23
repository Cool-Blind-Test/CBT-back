import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  TableForeignKey,
} from 'typeorm';

@ObjectType()
@Entity()
export class UserGame {
  @Column()
  @Field(() => ID)
  @PrimaryColumn()
  userId: number;

  @Column()
  @Field(() => ID)
  @PrimaryColumn()
  gameID: number;

  @Column()
  @Field(() => Int, { description: 'The score of the player in the game' })
  score: number;

  @Column()
  @Field(() => Boolean, { description: 'Has the player won this game ?' })
  isWon: boolean;
}
