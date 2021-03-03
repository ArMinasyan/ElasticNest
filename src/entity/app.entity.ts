import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: 'varchar', length: 50})
    firstName: string;

    @Column({type: 'varchar', length: 50})
    lastName: string;

    @Column({type: 'varchar', length: 50})
    email: string;

    @Column('date')
    day_of_birth: Date
}