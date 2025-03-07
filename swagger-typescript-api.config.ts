import dotenv from 'dotenv'
import { defaultConfig } from 'swagger-typescript-api-es';

dotenv.config()

export default defaultConfig({
  name: 'api.type.ts',
  output: './src/@types',
  url: process.env.VITE_SWAGGER_URL!,
  httpClientType: 'axios',
});
