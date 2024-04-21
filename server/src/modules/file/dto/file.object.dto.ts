import { IsNumber, IsString } from 'class-validator';

export class FileObjectDto {
  @IsString()
  originName: string;
  @IsString()
  name: string;
  @IsString()
  type: string;
  @IsNumber()
  size: number;
  @IsString()
  path1: string;
  @IsString()
  path2: string;
}
