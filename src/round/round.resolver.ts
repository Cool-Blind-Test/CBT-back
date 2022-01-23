import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoundService } from './round.service';
import { Round } from './entities/round.entity';
import { CreateRoundInput } from './dto/create-round.input';
import { UpdateRoundInput } from './dto/update-round.input';

@Resolver(() => Round)
export class RoundResolver {
  constructor(private readonly roundService: RoundService) {}

  @Mutation(() => Round)
  createRound(@Args('createRoundInput') createRoundInput: CreateRoundInput) {
    return this.roundService.create(createRoundInput);
  }

  @Query(() => [Round], { name: 'round' })
  findAll() {
    return this.roundService.findAll();
  }

  @Query(() => Round, { name: 'round' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.roundService.findOne(id);
  }

  @Mutation(() => Round)
  updateRound(@Args('updateRoundInput') updateRoundInput: UpdateRoundInput) {
    return this.roundService.update(updateRoundInput.id, updateRoundInput);
  }

  @Mutation(() => Round)
  removeRound(@Args('id', { type: () => Int }) id: number) {
    return this.roundService.remove(id);
  }
}
