import { IsOptional, IsString } from 'class-validator';

export class ProfileUpdateDto {
  @IsString()
  @IsOptional()
  nickname?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  profileImage?: string;
}
