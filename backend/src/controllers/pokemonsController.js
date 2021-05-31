const debug = require('debug')('app:heroesController');
const Pokemon = require('../model/pokemonModel');

function pokemonsController() {
  async function getAll(req, res) {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  }

  async function createOne(req, res) {
    const newPokemon = new Pokemon(req.body);
    debug(newPokemon);
    try {
      await newPokemon.save();
      res.json(newPokemon);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const pokemonById = await Pokemon.findById(
        req.params.pokemonId,
      );
      res.json(pokemonById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedPokemon = await Pokemon.findByIdAndUpdate(
        req.params.pokemonId,
        req.body,
        { new: true },
      );
      res.json(updatedPokemon);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Pokemon.findByIdAndDelete(req.params.pokemonId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
  };
}

module.exports = pokemonsController;