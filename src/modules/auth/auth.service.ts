import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { IUser } from 'src/type/user.type';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async validateUser(authDto: any) {
    const user: IUser = await this.usersRepository.findOneBy({
      username: authDto.username,
    });
    if (!user) throw new NotAcceptableException('Invalid credentials');
    return user;
  }
}
