const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res
      .status(403)
      .json({ message: "Un token est requis pour l'authentification !" });
  }

  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    return restart.status(401).json({ message: "Token invalide !" });
  }
  return next();
};

module.exports = verifyToken;
