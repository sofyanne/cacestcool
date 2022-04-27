const express = require("express");

const postRouter = express.Router();

postRouter.get("/", (req, res, next) => {
  res.json({
    title: "Les posts",
  });
});

module.exports = postRouter;
