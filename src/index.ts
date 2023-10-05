import { server } from './server/server';
import 'dotenv/config';

server.listen(process.env.PORT || 3500, () => console.log('App rodando'));