const express = require("express");

const app = express();

app.use(express.json());

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

app.post("/users", function(request, response){
    const body = request.body;

    console.log(body);

    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Thiago Costa"
    });
});

app.listen(3333, function(){
    console.log("Servidor rodando na porta 3333.");
});