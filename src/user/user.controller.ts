import { Controller, Get, Post, ValidationPipe, UsePipes, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dtos/user.Dto';

@Controller('users')
export class UserController {
    constructor(private userService : UserService){}


@Get('')
async getUser(){
    return await this.userService.getUsers();
}

@Post('register')
@UsePipes(ValidationPipe)
async createUser(@Body() userDto: UserDto){
    return this.userService.registerUsers(userDto);
} 
}

