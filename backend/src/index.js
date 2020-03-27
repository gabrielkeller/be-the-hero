const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/*
rota / recursos  ('/')     ('/Users')  
*/

/** 
*Métodos HTTP:
*    GET: Utilizamos quando estamos querendo buscar/listar uma informação do back-end
*    POST: Criar uma informação no back-end
*    PUT: Alterar uma informação no back-end
*    DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação). 
 *      Exemplo: app.get('/Users?name=Gabriel')
 * Route params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * Banco de dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
 */
