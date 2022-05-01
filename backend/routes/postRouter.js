const express = require("express");
const PostController = require("../controllers/PostController");
const auth = require("../middleware/auth");

const postRouter = express.Router();

postRouter.get("/post", PostController.getPost);
postRouter.get("/", PostController.getPosts);

postRouter.delete("/", auth, PostController.deletePost);
postRouter.post("/", auth, PostController.createPost);
postRouter.put("/", auth, PostController.updatePost);

module.exports = postRouter;
