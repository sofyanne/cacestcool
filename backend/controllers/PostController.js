const Post = require("../models/Post");


exports.createPost = async (req, res) => {

    const post = await Post.create({...req.body});
    await post.save();
    res.status(201).json({message: "Your post was created"});
}