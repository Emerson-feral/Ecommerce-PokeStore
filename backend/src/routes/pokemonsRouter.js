const { Router } = require('express');
const pokemonsController = require('../controllers/pokemonsController')();

function pokemonsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(pokemonsController.getAll)
    .post(pokemonsController.createOne);

  routes
    .route('/:heroId')
    .get(pokemonsController.getById)
    .put(pokemonsController.updateById)
    .delete(pokemonsController.deleteById);

  return routes;
}

module.exports = pokemonsRouter();