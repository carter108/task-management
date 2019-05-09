const User = require("../models/user");
const Utils = require("../utils");

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

module.exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: "User not found with id" + id });
    }
    res.json(user);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

module.exports.createUser = async (req, res) => {
  if (!req.body.user) {
    return res.status(400).send({
      error: "Invalid user model"
    });
  }

  try {
    const { name, password, email } = req.body.user;
    const passwordHash = await Utils.hashPassword(password);
    console.log("password", passwordHash);
    const newUser = new User({
      name,
      password: passwordHash,
      email
    });
    await newUser.save();
    res.send({ user: newUser });
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).send({ error: err });
  }
};
