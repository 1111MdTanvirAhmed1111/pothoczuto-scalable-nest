import { Controller, Get, Req } from "@nestjs/common";
import { PostService } from "./posts.service";

import { Body, Delete, Param, Post, Put } from '@nestjs/common';

@Controller()
export class PostController{
    constructor( private postService : PostService ){}


@Post('posts')
async createPost(@Body() data: any) {
  return this.postService.createPost(data);
}

@Get('posts/:id') 
async getPost(@Param('id') id: string) {
  return this.postService.getPost(id);
}

@Put('posts/:id')
async updatePost(@Param('id') id: string, @Body() data: any) {
  return this.postService.updatePost(id, data);
}

@Delete('posts/:id')
async deletePost(@Param('id') id: string) {
  return this.postService.deletePost(id);
}
@Get("posts")
async Hlww(@Req() req){
    // console.log(req.body)
    return this.postService.GetData(req)
}

}