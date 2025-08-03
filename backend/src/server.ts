import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import FastifyCors from '@fastify/cors';
import { DatabasePostgres } from './repo/index.ts';
import dotenv from 'dotenv';

dotenv.config();

interface Review {
  user_id: string;
  id_album: string;
  nota: number;
  descricao: string;
}

const server = Fastify();
const database = new DatabasePostgres();

server.register(FastifyCors, {
  origin: '*',
});

server.post('/review/:id', async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } : {id: string} = request.params as {id: string};
  const { id_album, nota, descricao } : Review = request.body as Review;
  const review: Review = {
    user_id: id,
    id_album,
    nota,
    descricao,
  };

  await database.createReview(review);
  return reply.code(201).send();
});

server.get('/review/:id/:id_album', async (request: FastifyRequest, reply: FastifyReply) => {
  const { id, id_album } = request.params as {id: string, id_album: string};
  const userId = Number(id);
  const albumId = Number(id_album);
  
  const reviews = await database.listReview(userId, albumId);

  const review = reviews.length > 0 ? reviews[0] : null;
  
  return reply.send(review);
});

server.get('/albuns', async (request: FastifyRequest, reply: FastifyReply) => {
  const albuns = await database.listAlbuns();
  return reply.send(albuns);
});

server.listen({ port: 3333 }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  const addr = server.server.address();
  if (typeof addr === 'object' && addr !== null) {
    console.log(`Server listening at port ${addr.port}`);
  } else {
    console.log(`Server listening`);
  }
});