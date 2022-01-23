import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MusicService } from './music.service';
import { Music } from './entities/music.entity';
import { CreateMusicInput } from './dto/create-music.input';
import { UpdateMusicInput } from './dto/update-music.input';

@Resolver(() => Music)
export class MusicResolver {
  constructor(private readonly musicService: MusicService) {}

  @Mutation(() => Music)
  createMusic(@Args('createMusicInput') createMusicInput: CreateMusicInput) {
    return this.musicService.create(createMusicInput);
  }

  @Query(() => [Music], { name: 'music' })
  findAll() {
    return this.musicService.findAll();
  }

  @Query(() => Music, { name: 'music' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.musicService.findOne(id);
  }

  @Mutation(() => Music)
  updateMusic(@Args('updateMusicInput') updateMusicInput: UpdateMusicInput) {
    return this.musicService.update(updateMusicInput.id, updateMusicInput);
  }

  @Mutation(() => Music)
  removeMusic(@Args('id', { type: () => Int }) id: number) {
    return this.musicService.remove(id);
  }
}
