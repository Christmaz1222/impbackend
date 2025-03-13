import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('hola')
    getHola() {
        return 'Hola mundo';
    }
}
