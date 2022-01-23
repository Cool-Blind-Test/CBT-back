import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Game } from 'src/game/entities/game.entity';
import { Round } from 'src/round/entities/round.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  TableForeignKey,
} from 'typeorm';

@ObjectType()
@Entity()
export class UserGame {
  @Column()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Round, (Round) => Round.winner)
  winningRounds: Round[];

  @ManyToOne(() => User, (User) => User.userGames)
  user: User;

  @ManyToOne(() => Game, (Game) => Game.userGames)
  game: Game;

  @Column()
  @Field(() => ID)
  gameID: number;

  @Column()
  @Field(() => Int, { description: 'The score of the player in the game' })
  score: number;

  @Column()
  @Field(() => Boolean, { description: 'Has the player won this game ?' })
  isWon: boolean;
}
