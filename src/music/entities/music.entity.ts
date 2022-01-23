import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
