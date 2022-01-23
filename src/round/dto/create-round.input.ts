import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoundInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
