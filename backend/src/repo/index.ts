import { randomUUID } from 'crypto';
import { sql } from '../database/connection.ts';

interface Review {
  user_id: string;
  id_album: string;
  nota: number;
  descricao: string;
  data: Date;
}
export class DatabasePostgres {
  async listAlbuns(){
    const albuns = await sql`SELECT * FROM album`;
    return albuns;
  }

  async createReview(review: Review){
    await sql`INSERT INTO avaliacao (user_id, id_album, nota, descricao, data) VALUES (${review.user_id}, ${review.id_album}, ${review.nota}, ${review.descricao}, ${review.data})`;
  }

  async listReview(id: string, id_album: string){
    const review = await sql`SELECT * FROM avaliacao WHERE user_id = ${id} AND id_album = ${id_album}`;
    return review;
  }

}