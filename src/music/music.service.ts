import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMusicInput } from './dto/create-music.input';
import { UpdateMusicInput } from './dto/update-music.input';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(Music)
    private readonly musicRepository: Repository<Music>,
  ) {}

  create(createMusicInput: CreateMusicInput) {
    return 'This action adds a new music';
  }

  async findAll(): Promise<Music[]> {
    return await this.musicRepository.find();
  }

  async findOne(id: number) {
    return await this.musicRepository.find({});
  }

  update(id: number, updateMusicInput: UpdateMusicInput) {
    return `This action updates a #${id} music`;
  }

  remove(id: number) {
    return `This action removes a #${id} music`;
  }
}
