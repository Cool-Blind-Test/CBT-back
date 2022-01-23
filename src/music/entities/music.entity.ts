import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { Round } from 'src/round/entities/round.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Music {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Name of the music' })
  @Column()
  name: string;

  @Field(() => String, { description: 'Path of the file' })
  @Column()
  file: string;

  @OneToMany(() => Round, (Round) => Round.music)
  rounds: Round[];

  @ManyToMany(() => Playlist, (Playlist) => Playlist.musics)
  playlists: Playlist[];
}
