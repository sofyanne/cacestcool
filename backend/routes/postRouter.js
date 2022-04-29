const express = require("express");
const PostController = require("../controllers/PostController");

const postRouter = express.Router();

postRouter.get("/post", PostController.getPost);
postRouter.get("/", PostController.getPosts);

postRouter.post("/delete", PostController.deletePost);
postRouter.post("/create", PostController.createPost);

module.exports = postRouter;
