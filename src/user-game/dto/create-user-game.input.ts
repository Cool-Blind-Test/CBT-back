import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserGameInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
