import Config from '@shared/config';
import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.register(import('./hello/hello.router'));

const bootstrap = async () => {
  try {
    await fastify.listen({
      port: Config.env.FASTIFY_PORT,
      host: Config.env.FASTIFY_HOSTNAME,
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

bootstrap();
