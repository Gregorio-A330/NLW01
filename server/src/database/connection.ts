import knex from 'knex'; 
import path from 'path';
// path.resolve() -> função que vai resolver a rota para qualquer sistema operacional
//importa o knex para criar a conexão e configura para utilização do sqlite
//npm install sqlite3 ->> instala o banco de dados

//__dirname -> variavel global que sempre retorna o diretório que está sendo executado o arquivo

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;



//Migrations = Histórico do banco de dados

// create table points
// create table users