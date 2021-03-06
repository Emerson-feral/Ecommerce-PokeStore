const { model, Schema } = require('mongoose');

const userSchema = Schema({
  email: String,
  nickname: String,
  password: String,
  wishlist: [{ type: Schema.ObjectId, ref: 'Pokemons' }]
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
