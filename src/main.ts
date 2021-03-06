import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const PORT = 3000;

    app.useStaticAssets(join(__dirname,'..','build'));

    app.enableCors({
        origin: true,
        credentials: true
    })
    await app.listen(PORT, () => {
        console.log("Port: ", PORT)
    });

}

bootstrap();
