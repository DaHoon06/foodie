import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './dto/jwt.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  createToken(payload: JwtPayload): string {
    const token = this.jwtService.sign(
      {
        id: payload.id,
        username: payload.username,
      },
      {
        secret: process.env.JWT_SECRET,
      },
    );
    return token;
  }
}
