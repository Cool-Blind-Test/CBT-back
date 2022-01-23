import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Column()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Field(() => String, { description: 'Username of the user' })
  username: string;

  @Column()
  @Field(() => String, { description: 'Email of the user' })
  @IsEmail()
  email: string;

  @Column()
  @Field(() => String, { description: 'Anilist username of the user' })
  anilist: string;

  @Column()
  @Field(() => String, { description: "Path to avatar's user" })
  avatar: string;

  @Column()
  @Field(() => Boolean, {
    description: 'Is use valid and/or authorized to auth',
  })
  isValid: boolean;

  @Column()
  @Field(() => Date, { description: 'Creation date of the user' })
  dateCreation: Date;
}
