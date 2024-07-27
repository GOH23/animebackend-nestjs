import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksModule } from './links/links.module';
import { AnimesModule } from './animes/animes.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Link } from './links/entities/link.entity';
import { Anime } from './animes/entities/anime.entity';
import { AuthModule } from './auth/auth.module';
import { FileController } from './file/file.controller';
import { StarratingModule } from './starrating/starrating.module';
import { StarRating } from './starrating/entities/starrating.entity';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { TagsModule } from './tags/tags.module';
import { Tags } from './tags/entities/tags.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'bnucq7n3yzrgufhp6ftt-postgresql.services.clever-cloud.com',
        port: 50013,
        username: 'u6lufckat4fdssajrlht',
        password: 'QB7WpZOkl8aBb6u2VPaFDXdV37Oa2w',
        database: 'bnucq7n3yzrgufhp6ftt',
        entities: [User,StarRating, Link, Anime,Tags],
        schema: 'dd',
        
        autoLoadEntities: true,
        synchronize: true
      }
    ), LinksModule, AnimesModule, UsersModule, AuthModule, StarratingModule, BookmarksModule, TagsModule],
  controllers: [AppController, FileController],
  providers: [AppService],
})
export class AppModule { }
