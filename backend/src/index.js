const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(routes);

/** ======================================
 * Rota / Recurso
 */

/** ======================================
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Apagar uma informação no back-end
 */

/** ======================================
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados enviados na rota após
  *        o símbolo de ? e servem geralmente para
  *        filtros, paginação. 
  * 
  * Route: Parâmetros utilizados para identificar
  *        recursos.
  * 
  * Request Body: É o corpo da requisição, utilizado
  *               para criar ou alterar recursos.
  */

  /**
   * Driver : SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */


app.listen(3333, function(){
    console.log("Servidor rodando na porta 3333.");
});