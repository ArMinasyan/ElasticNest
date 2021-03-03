import {Injectable} from '@nestjs/common';
import {ElasticsearchService} from '@nestjs/elasticsearch';
import {Repository} from "typeorm";
import {Users} from "./entity/app.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {IUser, randomUser} from './app.init';

class result {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    day_of_birth: string;

    constructor(data) {
        this.id = data[0];
        this.firstname = data[1];
        this.lastname = data[2];
        this.email = data[3]
        this.day_of_birth = data[4]
    }
}

@Injectable()
export class AppService {
    constructor(
        private readonly elasticService: ElasticsearchService,
        @InjectRepository(Users) private readonly repository: Repository<Users>
    ) {
    }

    public async init(): Promise<boolean> {
        const user: IUser[] = randomUser();
        for (let us of user) {
            await this.repository.insert(us);
        }
        return true
    }

    public async getData(value?: string) {
        if (value && value.trim().length !== 0) {
            const email = value.split('@');
            console.log(email);
            const {body} = await this.elasticService.search({
                index: 'users',
                body: {
                    query: {
                        bool: {
                            should: [
                                {
                                    wildcard: {firstname: {value: `${value}*`}}
                                },
                                {
                                    wildcard: {lastname: {value: `${value}*`}}
                                },
                                {
                                    wildcard: {email: {value: `${value}*`}}
                                }
                            ],

                        }
                    },
                    size: 1000
                }
            })
            return body.hits.hits
        } else {
            const {body} = await this.elasticService.search({
                index: 'users',
                body: {
                    query: {
                        match_all: {}
                    },
                    size: 1000
                },

            });
            return body.hits.hits
        }
    }
}
