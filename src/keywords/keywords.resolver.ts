import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { KeywordsService } from './keywords.service';
import { Keyword } from './entities/keyword.entity';
import { CreateKeywordInput } from './dto/create-keyword.input';
import { UpdateKeywordInput } from './dto/update-keyword.input';

@Resolver(() => Keyword)
export class KeywordsResolver {
  constructor(private readonly keywordsService: KeywordsService) {}

  @Mutation(() => Keyword)
  createKeyword(
    @Args('createKeywordInput') createKeywordInput: CreateKeywordInput,
  ) {
    return this.keywordsService.create(createKeywordInput);
  }

  @Query(() => [Keyword], { name: 'keywords' })
  findAll() {
    return this.keywordsService.findAll();
  }

  @Query(() => Keyword, { name: 'keyword' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.keywordsService.findOne(id);
  }

  @Mutation(() => Keyword)
  updateKeyword(
    @Args('updateKeywordInput') updateKeywordInput: UpdateKeywordInput,
  ) {
    return this.keywordsService.update(
      updateKeywordInput.id,
      updateKeywordInput,
    );
  }

  @Mutation(() => Keyword)
  removeKeyword(@Args('id', { type: () => Int }) id: number) {
    return this.keywordsService.remove(id);
  }
}
