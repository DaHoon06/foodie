import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

const StringIsNumber = (value) => isNaN(Number(value)) === true;

function EnumToArray(enumme) {
  return Object.keys(enumme)
    .filter(StringIsNumber)
    .map((key) => enumme[key]);
}

export class ResponseSuccessDto<T> {
  @ApiProperty({
    type: Boolean,
    example: true,
    description: '결과 여부 true/false',
  })
  @Expose()
  readonly result: boolean;

  @ApiProperty({
    enum: EnumToArray(HttpStatus),
    example: 201,
    description: '상태코드',
  })
  @Expose()
  code: number;

  @ApiProperty({
    type: 'generic',
    description:
      'object or array 형식 or 단일 데이터 타입의 응답데이타가 옵니다.',
  })
  @Expose()
  data: T;
}
