const express = require("express");

const globalRouter = express.Router();

globalRouter.get("/", (req, res, next) => {
  res.json({
    title: "Accueil",
  });
});

module.exports = globalRouter;
