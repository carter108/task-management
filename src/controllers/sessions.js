import User from "models/user";
import { generateToken } from "middleware";
import bcrypt from "bcrypt";

const findUserByEmail = async email => {
  const user = await User.findOne({ email });
  return user;
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Invalid username or password" });
  }
  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(404).json({ error: "User is not found" });
  }
  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if (isCorrectPassword) {
    const token = generateToken({ name: user.name, email: user.email });
    return res.json({ token: token });
  }
  res.status(400).json({ error: "Wrong password" });
};

export default {
  login
};
