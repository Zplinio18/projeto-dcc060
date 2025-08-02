import {sql} from './connection.ts';

sql``.then(() => {
    console.log('Tables created in your database');
})