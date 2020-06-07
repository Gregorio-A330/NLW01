//Arquivo apenas para armazenagem de informações

import express from 'express';

//npm install @types/express -D  -> -D só instala a dependencia para uso enquanto está criando o código, quando for subir a aplicação não é necessaria

const app = express();
//app.use(express.json()); o "USE" serve para adicionar uma funcionalidade ao express informando que vamos utilizar json
app.use(express.json());


//app.get (' Recurso ou Rota a ser seguida ', segundo parametro que é uma função que é executada assim que o usuário acessar a rota)
//request recebe dados sobre a requisição, response devolve a resposta
//ROTA: Endereço completo da requisição
//RECURSO: QUal entidade estamos acessando do sistema ->> /users

// GET: Buscar uma ou mais informações do Back-end
// POST: Criar uma nova informação no Back-end
// PUT: Atualizar uma informação existente no Back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

//Request Param: parametros que vem na própria rota que identificam um recurso 
// param serve para identificar o que eu realmente preciso

//Query Param: parametros que vem na própria rota geralmente opcionais para filtros, paginação
//Request Body: Parametros para criação/atualização de informações


// Quase todo o back-end é construido em cima de rotas quando desenvolve uma API Rest
const users = [
    'Diego',
    'Clayton',
    'Robson',
    'Daniel'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    //Json -> response.JSON({ retorna um objeto }) ou ([ um array ]) "envia de volta..."

    return response.json(filteredUsers);
});
// :id criado no metodo GET tem que ser inserido no params.id... se fosse outro nome em '/users/:batata'
// em params.batata deve seguir esse nome, que é o qual vai retornar o que eu necessito...
// por estar utilizando TIPOS a passagem [id] pode ter qualquer tipo por isso é necessário inserir Number(request.params.id);
//para converter o que vem de "string" para numero...

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);

});

//npm install ts-node -D ->> instala o typeScrypt para que o node entenda

// data vai receber um request com o corpo para passar as informações do objeto -> data.name ou data.email de forma dinamica
app.post('/users', (request, response) => {
    const data = request.body;
    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});


app.listen(3333);

//npx serve para executar pacotes
//executar a aplicação via node...
//npx ts-node src/server.ts
//vai dar erro, pois falta instalar o typescript dentro da maquina
//npm install typescript
// vai dar erro de novo pois falta o arquivo de configuração do typescript ->> npx tsc --init ->> criou o arquivo de config
// chamado tsconfig.json execute o comando npx ts-node src/server.ts novamente e seu app va estar rodando na porta desejada

//npm install ts-node-dev -> faz a mesma coisa que o expo, a cada atualização no código ele auto-executa
//npx ts-node-dev src/server.ts ->> executa

//para otimizar mais ainda, foi alterado dentro do package.json a linha de script e para iniciar o server
// execute ->> npm run "nome inserido no script" || npm run dev