import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '@modules/auth/dto/jwt.dto';

export const UserObject = createParamDecorator(
  (data, ctx: ExecutionContext): JwtPayload => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
