import { Injectable } from '@nestjs/common';
import { CreateUserGameInput } from './dto/create-user-game.input';
import { UpdateUserGameInput } from './dto/update-user-game.input';

@Injectable()
export class UserGameService {
  create(createUserGameInput: CreateUserGameInput) {
    return 'This action adds a new userGame';
  }

  findAll() {
    return `This action returns all userGame`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userGame`;
  }

  update(id: number, updateUserGameInput: UpdateUserGameInput) {
    return `This action updates a #${id} userGame`;
  }

  remove(id: number) {
    return `This action removes a #${id} userGame`;
  }
}
