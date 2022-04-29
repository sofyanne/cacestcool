const Post = require("../models/Post");


exports.getPosts = async (req, res) => {
  const posts = await Post.find();

  if (!posts) {
    res.status(404).json({ message: "Aucun post trouvé" });
  } else {
    res.status(200).json(posts);
  }
};

exports.getPost = async (req, res) => {
  if (!req.body) {
    return res.status(422).json({
      message: "Veuillez renseigner l'id !",
    });
  }

  const post = Post.findById(req.body.id);

  if (!post) {
    res.status(404).json({ message: "Aucun post trouvé" });
  } else {
    res.status(200).json(post);
  }
};


exports.createPost = async (req, res) => {
  if (!req.body) {
    return res.status(422).json({
      message: "Veuillez remplir tous les champs !",
    });
  }
  const post = await Post.create({ ...req.body });
  post.save((error) => {
    if (error) {
      return res.status(422).json(error);
    }
    res.status(201).json({ message: "Votre post à été créé" });
  });
};
