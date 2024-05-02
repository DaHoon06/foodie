import { IsOptional, IsString } from 'class-validator';

export class JwtPayload {
  @IsString()
  username: string;

  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  profile: string;
}
