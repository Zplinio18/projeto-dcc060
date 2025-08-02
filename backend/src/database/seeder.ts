import {sql} from './connection.ts';

sql``.then(() => {
    console.log('Seeder executed');
})