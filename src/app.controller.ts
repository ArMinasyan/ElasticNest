import {Controller, Get, Query, Render, Res} from '@nestjs/common';
import {AppService} from './app.service';
import {Response} from 'express';
import {join} from 'path';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    public main(@Res() res: Response) {
        res.status(200);
        res.sendFile(join(__dirname, '..', 'build', 'index.html'));
        res.end();
    }



    @Get('init')
    public async init(): Promise<boolean> {
        await this.appService.init();
        return true
    }

    @Get('search')
    public async get(@Query('value') value: string): Promise<any> {
        if(value) return await this.appService.getData(value);
        else return await this.appService.getData()
    }
}
