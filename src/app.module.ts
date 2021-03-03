import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ServeStaticModule} from '@nestjs/serve-static';
import {ElasticsearchModule} from '@nestjs/elasticsearch';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Users} from './entity/app.entity';
import {Repository} from "typeorm";

// import {elasticRepository} from './app.init';

@Module({
    imports: [
        ElasticsearchModule.register({
            node: 'http://localhost:9200',
        }),

        TypeOrmModule.forRoot(),

        TypeOrmModule.forFeature([Users])
    ],
    controllers: [AppController],
    providers: [AppService, Repository],
    exports: [TypeOrmModule]
})
export class AppModule {
}
