const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
  name: String,
  type: String,
  avatarImage: String,
  price: Number

});

module.exports = mongoose.model('Pokemons', pokemonSchema);
