import { FastifyInstance } from 'fastify';

export async function HelloRouter(fastify: FastifyInstance) {
  fastify.get('/hello', async (req, reply) => {
    return { hello: 'world' };
  });
}

export default HelloRouter;
