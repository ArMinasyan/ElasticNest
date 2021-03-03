import {createConnection, Connection, getRepository} from 'typeorm';
import {Users} from './entity/app.entity';

import * as faker from 'faker';

export interface IUser {
    firstName?: string,
    lastName?: string,
    day_of_birth?: string,
    email?: string
}

export function randomUser(): IUser[] {
    let users: Array<IUser> = [];


    let gen: number, firstName: string, lastName: string;
    for (let i = 0; i < 500; i++) {
        gen = faker.random.number({min: 1, max: 2});
        firstName = faker.name.firstName(gen);
        lastName = faker.name.lastName(gen);
        users.push({
            firstName: firstName,
            lastName: lastName,
            email: faker.internet.email(firstName, lastName).toLowerCase(),
            day_of_birth: faker.date.between('1960', '2003').toLocaleDateString()
        })

    }

    return users
}