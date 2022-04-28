const express = require("express");
const PostController = require("../controllers/PostController");

const postRouter = express.Router();

postRouter.get("/", PostController.getPosts);

postRouter.post("/", PostController.createPost);

module.exports = postRouter;
