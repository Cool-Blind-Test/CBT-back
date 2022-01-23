import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateKeywordInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
