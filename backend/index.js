const express = require("express");

const app = express();

app.get("/", function(request, response){
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Thiago Costa"
    });
});

app.listen(3333, function(){
    console.log("Servidor rodando na porta 3333.");
});