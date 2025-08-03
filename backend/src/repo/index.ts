import { sql } from '../database/connection.ts';

interface Review {
  user_id: string;
  id_album: string;
  nota: number;
  descricao: string;
}
export class DatabasePostgres {
  async listAlbuns(){
    const albuns = await sql`
      SELECT 
        al.id,
        al.titulo,
        al.foto_capa,
        u.nome 
      FROM album al 
      JOIN album_artista aa ON aa.album_id = al.id
      JOIN artista ar ON aa.artista_id = ar.id 
      JOIN usuario u ON u.id = ar.id;`;
    return albuns;
  }

  async createReview(review: Review){
    await sql`INSERT INTO avaliacao (usuario_id, album_id, nota, descricao) VALUES (${review.user_id}, ${review.id_album}, ${review.nota}, ${review.descricao})`;
  }

  async listReview(id: number, id_album: number){
    const review = await sql`SELECT * FROM avaliacao WHERE usuario_id=${id} AND album_id=${id_album}`;
    return review;
  }

}