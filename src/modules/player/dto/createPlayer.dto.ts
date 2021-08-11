import { IsEmail, IsEmpty, IsString, Validate } from 'class-validator';
import { Player } from '../player.entity';
import { OmitType } from '@nestjs/mapped-types';
import { isValidObjectId } from 'mongoose';

export class CreatePlayerDTO extends OmitType(Player, [
  'ranking',
  'position',
  '_id',
  'createdAt',
  'updatedAt',
]) {
  @IsEmpty()
  @Validate((value) => isValidObjectId(value), {
    message: 'Is not Valid ObjectId',
  })
  _id?: string;

  @IsString()
  cellPhone: string;

  @IsEmail()
  email: string;

  @IsString()
  name: string;
}
