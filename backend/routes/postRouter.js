const express = require("express");
const PostController = require("../controllers/PostController");

const postRouter = express.Router();

postRouter.get("/", (req, res, next) => {
  res.json({
    title: "Les posts",
  });
});

postRouter.post("/", PostController.createPost);

module.exports = postRouter;
