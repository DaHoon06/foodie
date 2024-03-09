import { IsNumber, IsOptional, IsString } from 'class-validator';

export class RestaurantListsDto {
  @IsString()
  title: string;
  @IsString()
  location: string;
  @IsNumber()
  point: number;
  @IsString()
  categories: string;
  @IsNumber()
  viewCount: number;
  @IsNumber()
  reviewCount: number;
  @IsString()
  @IsOptional()
  thumbnail?: string;
}
