import { Knex } from './server/database/knex';
import { server } from './server/server';
import 'dotenv/config';

const startServer = () => {
    server.listen(process.env.PORT || 3500, () => console.log('App rodando'));
};

if(process.env.IS_LOCALHOST !== 'true'){
    Knex.migrate.latest()
        .then(() => {
            startServer();
        })
        .catch(console.log);
}else{
    startServer();
}
