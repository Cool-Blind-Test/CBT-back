import { Module } from '@nestjs/common';
import { KeywordsService } from './keywords.service';
import { KeywordsResolver } from './keywords.resolver';
import { Keyword } from './entities/keyword.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword])],
  providers: [KeywordsResolver, KeywordsService],
})
export class KeywordsModule {}
