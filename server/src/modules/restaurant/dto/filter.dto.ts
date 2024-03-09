import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterDto {
  @ApiProperty({
    description: '필터 - 정렬 방법 선택',
    example: 'gradeCount',
    type: String,
  })
  @IsString()
  @IsOptional()
  sort: string; // 정렬 -> enum

  @ApiProperty({
    description: '필터 - 지역 선택',
    example: 'all',
    type: String,
  })
  @IsString()
  @IsOptional()
  region: string;

  @ApiProperty({
    description: '페이지 번호',
    example: 1,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  page: number;
}
