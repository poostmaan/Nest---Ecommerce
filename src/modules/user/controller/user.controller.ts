import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {

    @Get()
    getUser() {
        return `Some users`;
    }

}
