import { CreateKeywordInput } from './create-keyword.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKeywordInput extends PartialType(CreateKeywordInput) {
  @Field(() => Int)
  id: number;
}
