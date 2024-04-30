import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './dto/jwt.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  secret = '';

  constructor(
    private configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.secret = configService.get<string>('JWT_SECRET');
  }

  createToken(payload: JwtPayload): string {
    const token = this.jwtService.sign(
      {
        id: payload.id,
        username: payload.username,
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
