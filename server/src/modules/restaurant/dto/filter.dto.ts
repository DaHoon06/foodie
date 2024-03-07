import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterDto {
  @ApiProperty({
    description: '필터 - 정렬 방법 선택',
    example: '1',
    type: String,
  })
  @IsString()
  @IsOptional()
  sort: string; // 정렬 -> enum

  @ApiProperty({
    description: '필터 - 지역 선택',
    example: '1',
    type: String,
  })
  @IsString()
  @IsOptional()
  location: string;
}
