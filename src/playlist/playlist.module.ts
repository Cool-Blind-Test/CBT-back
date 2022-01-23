import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistResolver } from './playlist.resolver';
import { Playlist } from './entities/playlist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist])],
  providers: [PlaylistResolver, PlaylistService],
})
export class PlaylistModule {}
