import { CreateRoundInput } from './create-round.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRoundInput extends PartialType(CreateRoundInput) {
  @Field(() => Int)
  id: number;
}
