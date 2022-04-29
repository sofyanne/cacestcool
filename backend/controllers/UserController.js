const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { eventNames } = require("../models/User");

exports.signupUser = async (req, res) => {
  if (!req.body) {
    return res.status(422).json({
      message: "Veuillez remplir tous les champs !",
    });
  }

  try {
    const { firstname, lastname, email, avatar, password } = req.body;

    if (!(firstname && lastname && email && avatar && password)) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    const olduser = await User.findOne({ email });

    if (olduser) {
      return res.status(409).json({ message: "Utilisateur déja existant" });
    }

    const SALT_ROUNDS = 10;

    const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
      firstname,
      lastname,
      email,
      avatar,
      password: hashPassword,
    });

    const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    user.token = token;

    user.save((error) => {
      if (error) {
        return res.end(422).json({ error });
      }
      return res
        .status(201)
        .json({ message: "L'utilisateur à été créé" });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.signinUser = async (req, res) => {};
