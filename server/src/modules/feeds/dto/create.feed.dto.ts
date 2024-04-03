import { UserDto } from '@modules/users/dto/sign-in.dto';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserEntity } from '@modules/users/entities/user.entity';
import { ShopEntity } from '@modules/shop/entities/shop.entity';

export class Address {
  @IsString()
  name: string;

  @IsString()
  sigungu: string;

  @IsString()
  sido: string;

  @IsString()
  x: string;

  @IsString()
  y: string;
}

export class ShopDto {
  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsObject()
  @Type(() => Address)
  address: Address;
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
  @Type(() => ShopDto)
  @IsObject()
  item: ShopDto; // 아직 구성이 정해지지 않음
}

export class CreateFeedDataDto {
  @IsString()
  content: string;

  @IsObject()
  @Type(() => UserEntity)
  @IsNotEmpty()
  user: UserEntity;

  @IsObject()
  @IsOptional()
  @Type(() => ShopEntity)
  shop?: ShopEntity;
}
