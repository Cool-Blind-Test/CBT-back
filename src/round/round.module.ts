import { Module } from '@nestjs/common';
import { RoundService } from './round.service';
import { RoundResolver } from './round.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Round } from './entities/round.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Round])],
  providers: [RoundResolver, RoundService],
})
export class RoundModule {}
