const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  if (!req.body) {
    res.status(422).json({
      message: "Veuillez remplir tous les champs !",
    });
  }

  const SALT_ROUNDS = 10;

  const password = await bcrypt.hash(req.body.password, SALT_ROUNDS);

    User.create({...req.body}, (error, user) => {
    if(error) {
        res.status(400).json({ error });
    }
    res.status(201).json(user);
  });


};
