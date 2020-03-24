const express = require("express");

const app = express();


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
  */

app.get("/users", function(request, response){
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Thiago Costa"
    });
});

app.listen(3333, function(){
    console.log("Servidor rodando na porta 3333.");
});