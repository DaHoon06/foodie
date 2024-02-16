import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PayloadDto {
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'USER Object ID',
  })
  _id: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'USER ID',
  })
  userId: string;

  @IsString()
  @ApiProperty({
    type: Number,
    required: true,
    description: '소속',
  })
  groupId: string;
}

export class JwtPayloadDto {
  @Type(() => PayloadDto)
  @IsObject()
  @IsNotEmpty()
  @ApiProperty({
    type: Object,
    required: true,
    description: 'JWT Payload 정보',
  })
  payload: PayloadDto;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: '정보 생성 시간',
  })
  iat: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: '정보 만료 시간',
  })
  exp: number;
}
