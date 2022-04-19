const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    
  },
  image: {
    type: String,
    require: true,
  },
  like: {
    
  },
  createdAt: {
      type: Date,
      require: true
  }
});

module.exports = mongoose.model("Post", postSchema);
