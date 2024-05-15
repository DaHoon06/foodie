import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './dto/jwt.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  secret = '';

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.secret = this.configService.get<string>('JWT_SECRET');
  }

  createToken(payload: JwtPayload): string {
    const token = this.jwtService.sign(
      {
        id: payload.id,
        username: payload.username,
        profile: payload.profile,
      },
      {
        secret: this.secret,
      },
    );
    return token;
  }

  async verify(token: string) {
    return this.jwtService.verify(token, {
      secret: this.secret,
    });
  }
}
