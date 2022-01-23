import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMusicInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
