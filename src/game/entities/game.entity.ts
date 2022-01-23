import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { Round } from 'src/round/entities/round.entity';
import { UserGame } from 'src/user-game/entities/user-game.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Game {
  @Column()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => UserGame, (UserGame) => UserGame.game)
  userGames: UserGame[];

  @OneToMany(() => Round, (Round) => Round.game)
  rounds: Round[];

  @ManyToOne(() => Playlist, (Playlist) => Playlist.games)
  playlist: Playlist;

  @Column()
  @Field(() => String, { description: 'The name of the game' })
  name: string;

  @Column()
  @Field(() => Int, { description: 'How many round have been played' })
  progression: number;
}
