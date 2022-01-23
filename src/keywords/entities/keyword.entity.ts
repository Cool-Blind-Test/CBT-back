import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Keyword {
  @Column()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Field(() => String, { description: 'Keyword name' })
  name: string;

  @ManyToMany(() => Playlist, (Playlist) => Playlist.keywords)
  playlists: Playlist[];
}
