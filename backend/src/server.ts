import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import FastifyCors from '@fastify/cors';
import { DatabasePostgres } from './repo/index.ts';
import dotenv from 'dotenv';

dotenv.config();

const server = Fastify();
const database = new DatabasePostgres();

server.register(FastifyCors, {
  origin: '*',
});

server.post('/review/:id', async (request: FastifyRequest, reply: FastifyReply) => {
  return reply.code(201).send();
});

server.get('/albuns', async (request: FastifyRequest, reply: FastifyReply) => {
  const albuns = await database.list();
  return reply.send(albuns);
});

server.get('/albuns/:id', async (request: FastifyRequest, reply: FastifyReply) => {
  return reply.send();
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