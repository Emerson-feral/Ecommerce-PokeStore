const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
  name:String
});

module.exports = mongoose.model('Pokemons', pokemonSchema);