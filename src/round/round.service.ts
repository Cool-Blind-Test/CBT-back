import { Injectable } from '@nestjs/common';
import { CreateRoundInput } from './dto/create-round.input';
import { UpdateRoundInput } from './dto/update-round.input';

@Injectable()
export class RoundService {
  create(createRoundInput: CreateRoundInput) {
    return 'This action adds a new round';
  }

  findAll() {
    return `This action returns all round`;
  }

  findOne(id: number) {
    return `This action returns a #${id} round`;
  }

  update(id: number, updateRoundInput: UpdateRoundInput) {
    return `This action updates a #${id} round`;
  }

  remove(id: number) {
    return `This action removes a #${id} round`;
  }
}
