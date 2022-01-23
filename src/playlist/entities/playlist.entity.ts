import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
