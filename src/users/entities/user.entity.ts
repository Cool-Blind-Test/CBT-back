import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { Round } from 'src/round/entities/round.entity';
import { UserGame } from 'src/user-game/entities/user-game.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Column()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => UserGame, (UserGame) => UserGame.user)
  userGames: UserGame[];

  @OneToMany(() => Playlist, (Playlist) => Playlist.author)
  playlist: Playlist[];

  @Column({ unique: true })
  @Field(() => String, { description: 'Username of the user' })
  username: string;

  @Column()
  @Field(() => String, { description: "User's password" })
  password: string;

  @Column()
  @Field(() => String, { description: 'Email of the user' })
  @IsEmail()
  email: string;

  @Column()
  @Field(() => String, {
    description: 'Anilist username of the user',
    nullable: true,
  })
  anilist?: string;

  @Column()
  @Field(() => String, { description: "Path to avatar's user" })
  avatar: string;

  @Column()
  @Field(() => Boolean, {
    description: 'Is use valid and/or authorized to auth',
  })
  isValid: boolean;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => Date, { description: 'Creation date of the user' })
  dateCreation: Date;

  @Column()
  @Field(() => String, { description: "User's role" })
  role: string;
}
