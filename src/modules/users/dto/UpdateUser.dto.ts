import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UpdateUserDto {
  // @IsNotEmpty({ message: 'Question is required' })
  // @Length(3, 255, { message: 'Question must be between 3 and 255 characters' })
  // question: string;
  @ApiProperty({ example: 'username', description: 'User name' })
  @IsNotEmpty({ message: 'username is required' })
  @IsOptional()
  username: string;

  @ApiProperty({ example: '+998912345678', description: 'User phone number' })
  @IsOptional()
  @IsPhoneNumber('UZ', { message: 'Invalid phone number' })
  phone_number: string;

  @ApiProperty({ example: 'example@mail.com', description: 'User email' })
  @IsOptional()
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  // first_name;
  @ApiProperty({ example: 'John', description: 'User first name' })
  @IsOptional({ message: 'first_name is required' })
  @IsString({ message: 'first_name must be a valid string' })
  first_name: string;

  // last_name;
  @ApiProperty({ example: 'Doe', description: 'User last name' })
  @IsOptional({ message: 'last_name is required' })
  @IsString({ message: 'last_name must be a valid string' })
  last_name: string;
}
