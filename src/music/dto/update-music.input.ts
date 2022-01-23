import { CreateMusicInput } from './create-music.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMusicInput extends PartialType(CreateMusicInput) {
  @Field(() => Int)
  id: number;
}
