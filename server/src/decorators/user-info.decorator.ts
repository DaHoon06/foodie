import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayloadDto } from '@modules/auth/dto/jwt.dto';

export const User = createParamDecorator(
  (data, ctx: ExecutionContext): JwtPayloadDto => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
