import {sql} from './connection.ts';

await sql`
`.then(() => {
    console.log('Seeder executed');
})