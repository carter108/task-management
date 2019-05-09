module.exports.getUsers = (req, res) => {
  res.send("Get users");
};

module.exports.getUser = (req, res) => {
  res.send("Get user info");
};

module.exports.createUser = (req, res) => {
  res.send("Create user");
};

module.exports.updateUser = (req, res) => {
  res.send("Update user");
};

module.exports.deleteUser = (req, res) => {
  res.send("Delete user");
};
