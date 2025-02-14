
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();


@Injectable()
export class AppService {

    async Welcome(){
        return "Welcome Brooo"
    }

 
}
