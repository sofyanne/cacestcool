const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  const posts = await Post.find();

  if (!posts) {
    return res.status(404).json({ message: "Aucun post trouvé" });
  } else {
    return res.status(200).json(posts);
  }
};

exports.getPost = async (req, res) => {
  if (!req.body) {
    return res.status(422).json({
      message: "Veuillez renseigner l'id !",
    });
  }

  const post = await Post.findById(req.body.id).exec();

  if (!post) {
    return res.status(404).json({ message: "Aucun post trouvé" });
  } else {
    return res.status(200).json(post);
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

exports.deletePost = async (req, res) => {
  // Verifier si la suppression vient bien de l'auteur du post.
  if (!req.body) {
    return res.status(422).json({
      message: "Id invalide ou inéxistant !",
    });
  }
  await Post.findByIdAndDelete(req.body.id, (error, post) => {
    if(error) {
      return res.status(404).json({ message: "Aucun post à supprimer" });
    }
    return res.status(204).json("Le post à été supprimé !" + post);
  });
  
};
