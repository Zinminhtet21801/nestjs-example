import { IsNotEmpty, IsString } from 'class-validator';
export class CreateMessageDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
