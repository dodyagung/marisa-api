import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<any> {
    const password_hashed = await bcrypt.hash(password, 10);

    const user = await this.usersService.findByUsername(username);
    const isMatch = await bcrypt.compare(user?.password, password_hashed);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.user_id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
