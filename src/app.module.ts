import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './utils/env';


@Module({
  imports: [ MongooseModule.forRoot(env.MONGODB_URI), UserModule],
})
export class AppModule {}
