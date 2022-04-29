const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  if (!req.body) {
    return res.status(422).json({
      message: "Veuillez remplir tous les champs !",
    });
  }

  const SALT_ROUNDS = 10;

  const password = await bcrypt.hash(req.body.password, SALT_ROUNDS);

  const user = await User.create({ ...req.body, password: password });
  user.save((error) => {
    if (error) {
      return res.end(422).json({ error });
    }
    return res.status(201).json({ message: "L'utilisateur à été créé" });
  });
};
