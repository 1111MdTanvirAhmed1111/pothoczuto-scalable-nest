
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();


@Injectable()
export class PostService {


  async createPost(data: any) {

    const {username, email, password } = data;
    console.log(username, email, password);

    
    return await prisma.user.create({
      data: {
       username,
        email, 
        password
      }
    });
  }

  async getPost(id: string) {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) }
    });
  }

  async updatePost(id: string, data: any) {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data
    });
  }

  async deletePost(id: string) {
    return await prisma.user.delete({
      where: { id: parseInt(id) }
    });
  }

    async GetData(req){

        if(req.query.id){
           const quer= await prisma.user.findUnique({
                where:{id: parseInt(req.query.id)}
            })
            return quer
        }

        
        return await prisma.user.findMany()
    }

 
}
