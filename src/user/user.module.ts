import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user.model';

@Module({
  controllers: [UserController],
  providers: [UserService],

  imports: [
    MongooseModule.forFeature([
      {name: 'user', schema:UserSchema}
    ])
  ]
})
export class UserModule {}
