const express = require("express");

const OngController = require("./controllers/OngControllers");

const connection = require("./database/connection");

const routes = express.Router();

/*
routes.get("/ongs", async (request, response) => {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
})

*/

routes.post("/ongs", OngController.create);

module.exports = routes;