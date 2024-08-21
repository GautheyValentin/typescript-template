require('dotenv').config();
import { z } from 'zod';

const schema = z
  .object({
    NODE_ENV: z.enum(['development', 'production']),
    FASTIFY_HOSTNAME: z.string().default('0.0.0.0'),
    FASTIFY_PORT: z.number({ coerce: true }).default(3000),
    DATABASE_URL: z.string(),
  })
  .required();

type ConfigType = z.infer<typeof schema>;

class Config {
  private _env: ConfigType;

  constructor() {
    this._env = schema.parse(process.env);
  }

  get env(): ConfigType {
    return this._env;
  }
}

export default new Config();
