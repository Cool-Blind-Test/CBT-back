import { InputType, Field } from '@nestjs/graphql';
import { isEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;
  @Field(() => String, { description: 'last name of the user' })
  lastName: string;
  @Field(() => String, { description: 'email of the user' })
  email: string;
}
