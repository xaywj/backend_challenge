import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}
  @Post('login')
  async login(@Body() authDto: AuthDto) {
      console.log(authDto);
    const user = await this.authService.validateUser(authDto); 
    // check password hash here
    const isMatch = await bcrypt.compare(authDto.password, user.password);
    if (!isMatch) throw new UnauthorizedException();
    const payload = { id: user?.id, username: user?.username, role: user?.role };
    const token = await this.jwtService.signAsync(payload);
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
      user_id: user.id,
    };
  }
}
