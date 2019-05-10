import Constants from "constants";
import jwt from "jsonwebtoken";

export const errorHandler = (err, req, res, next) => {
  res.status(500).json({ error: err.stack });
};

export const generateToken = data => {
  let token = jwt.sign({ data }, Constants.SECRET, { expiresIn: "24h" });
  return token;
};

export const checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, Constants.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          error: "Token is invalid"
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      message: "Auth token is not supplied"
    });
  }
};

export const taskRequestHandler = (req, res, next) => {
  const { userId } = req.params;
  if (userId) {
    req.userId = userId;
    return next();
  }
  res.status(400).json({ error: "userId is not supplied" });
};
