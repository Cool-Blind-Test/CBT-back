import { CreateUserGameInput } from './create-user-game.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserGameInput extends PartialType(CreateUserGameInput) {
  @Field(() => Int)
  id: number;
}
