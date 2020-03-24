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

app.get("/", function(request, response){
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Thiago Costa"
    });
});

app.listen(3333, function(){
    console.log("Servidor rodando na porta 3333.");
});