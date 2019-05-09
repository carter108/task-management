import bcrypt from "bcrypt";
import Constants from "../constants";

export const hashPassword = plainPassword => {
  return bcrypt.hash(plainPassword, Constants.SALT);
};
