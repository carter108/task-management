import User from "../models/user";
import Utils from "../utils";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: "User not found with id" + id });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  if (!req.body.user) {
    return res.status(400).send({
      error: "Invalid user model"
    });
  }

  try {
    const { name, password, email } = req.body.user;
    const passwordHash = await Utils.hashPassword(password);
    const newUser = new User({
      name,
      password: passwordHash,
      email
    });
    await newUser.save();
    res.send({ user: newUser });
  } catch (err) {
    next(err);
  }
};

export default {
  getUsers,
  getUser,
  createUser
};
