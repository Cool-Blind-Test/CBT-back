import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Game } from 'src/game/entities/game.entity';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { Music } from 'src/music/entities/music.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Playlist {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Name of the playlist' })
  @Column()
  name: string;

  @Field(() => Int, {
    description: 'Number of times a playlist has been played',
  })
  @Column()
  gameCount: number;

  @ManyToOne(() => User, (User) => User.playlist)
  author: User;

  @OneToMany(() => Game, (Game) => Game.playlist)
  games: Game[];

  @ManyToMany(() => Music, (Music) => Music.playlists)
  @JoinTable()
  musics: Music[];

  @ManyToMany(() => Keyword, (Keyword) => Keyword.playlists)
  @JoinTable()
  keywords: Keyword[];
}
