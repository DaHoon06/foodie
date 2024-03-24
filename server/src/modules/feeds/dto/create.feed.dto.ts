import { IsString } from 'class-validator';

export class CreateFeedDto {
  @IsString()
  content: string;
}
