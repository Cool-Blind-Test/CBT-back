import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicResolver } from './music.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './entities/music.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Music])],
  providers: [MusicResolver, MusicService],
})
export class MusicModule {}
