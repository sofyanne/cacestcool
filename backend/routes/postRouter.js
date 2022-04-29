const express = require("express");
const PostController = require("../controllers/PostController");

const postRouter = express.Router();

postRouter.get("/post", PostController.getPost);
postRouter.get("/", PostController.getPosts);

postRouter.delete("/", PostController.deletePost);
postRouter.post("/", PostController.createPost);
postRouter.put("/", PostController.updatePost);

module.exports = postRouter;
