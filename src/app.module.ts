import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post/posts.service';
import { PostController } from './post/post.controller';
import { PostMiddleware, ViewMiddleware } from './post/post.middleware';



@Module({
  controllers: [AppController,PostController],
  providers: [AppService,PostService],
})



export class AppModule {

    configure(consumer: MiddlewareConsumer) {
        // consumer.apply(ViewMiddleware,PostMiddleware).forRoutes('posts');
      }
}
