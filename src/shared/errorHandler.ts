import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export function errorHandler(
  _error: FastifyError,
  _req: FastifyRequest,
  reply: FastifyReply,
) {
  reply.code(500).send({
    code: 500,
  });
}
