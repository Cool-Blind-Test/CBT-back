import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserGameService } from './user-game.service';
import { UserGame } from './entities/user-game.entity';
import { CreateUserGameInput } from './dto/create-user-game.input';
import { UpdateUserGameInput } from './dto/update-user-game.input';

@Resolver(() => UserGame)
export class UserGameResolver {
  constructor(private readonly userGameService: UserGameService) {}

  @Mutation(() => UserGame)
  createUserGame(
    @Args('createUserGameInput') createUserGameInput: CreateUserGameInput,
  ) {
    return this.userGameService.create(createUserGameInput);
  }

  @Query(() => [UserGame], { name: 'userGame' })
  findAll() {
    return this.userGameService.findAll();
  }

  @Query(() => UserGame, { name: 'userGame' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userGameService.findOne(id);
  }

  @Mutation(() => UserGame)
  updateUserGame(
    @Args('updateUserGameInput') updateUserGameInput: UpdateUserGameInput,
  ) {
    return this.userGameService.update(
      updateUserGameInput.id,
      updateUserGameInput,
    );
  }

  @Mutation(() => UserGame)
  removeUserGame(@Args('id', { type: () => Int }) id: number) {
    return this.userGameService.remove(id);
  }
}
