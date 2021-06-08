const { model, Schema } = require('mongoose');

const userSchema = Schema({
  email: String,
  nickname: String,
  password: String,
  wishlist: [String]
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);