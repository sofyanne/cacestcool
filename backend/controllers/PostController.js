const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  const posts = await Post.find();

  if (!posts) {
    res.status(404).json({ message: "Aucun post trouvé" });
  } else {
    res.status(200).json(posts);
  }
};

exports.createPost = async (req, res) => {
  const post = await Post.create({ ...req.body });
  await post.save();
  res.status(201).json({ message: "Your post was created" });
};
