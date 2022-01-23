import { Module } from '@nestjs/common';
import { UserGameService } from './user-game.service';
import { UserGameResolver } from './user-game.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGame } from './entities/user-game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserGame])],
  providers: [UserGameResolver, UserGameService],
})
export class UserGameModule {}
