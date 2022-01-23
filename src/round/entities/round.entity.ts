import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Game } from 'src/game/entities/game.entity';
import { Music } from 'src/music/entities/music.entity';
import { UserGame } from 'src/user-game/entities/user-game.entity';
import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToOne(() => UserGame, (UserGame) => UserGame.winningRounds)
  winner: UserGame;

  @ManyToOne(() => Game, (Game) => Game.rounds)
  game: UserGame;

  @ManyToOne(() => Music, (Music) => Music.rounds)
  music: UserGame;
}
