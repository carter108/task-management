const bcrypt = require("bcrypt");
const SALT = require("../constants").SALT;

module.exports.hashPassword = plainPassword => {
  return bcrypt.hash(plainPassword, SALT);
};
