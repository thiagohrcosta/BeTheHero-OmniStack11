const express = require("express");

const OngController = require("./controllers/OngControllers");

const IncidentController = require("./controllers/IncidentController");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.post("/incidents", IncidentController.create);

module.exports = routes;