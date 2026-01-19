import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import  { JwtAuthGuard } from "./guards/jwt-auth.guards";
import type { JwtPayload } from "./types/jwt-payload.interface";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import { UserRole } from "src/utils/role";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@CurrentUser() user: JwtPayload) {
        return user;
    }
}