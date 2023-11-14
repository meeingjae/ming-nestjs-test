import { Controller, Get } from "@nestjs/common";

@Controller('user')
export class UserController {
  @Get()
  findAll(): string {
    return 'hi my name is mingjae';
  }
}
