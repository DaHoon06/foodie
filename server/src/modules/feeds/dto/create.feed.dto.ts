import { UserDto } from '@modules/users/dto/sign-in.dto';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class LocationItem {
  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsString()
  sigungu: string;

  @IsString()
  dong: string;
}

export class CreateFeedDto {
  @IsString()
  content: string;

  @IsObject()
  @Type(() => UserDto)
  @IsNotEmpty()
  user: UserDto;

  @IsArray()
  @IsOptional()
  files: [];

  @IsOptional()
  @Type(() => LocationItem)
  @IsObject()
  item: LocationItem; // 아직 구성이 정해지지 않음
}
