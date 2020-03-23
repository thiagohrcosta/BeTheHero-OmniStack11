const express = require("express");

const app = express();

app.get("/", function(request, response){
    return response.send("Hello World.");
})

app.listen(3333, function(){
    console.log("Servidor rodando na porta 3333.");
});