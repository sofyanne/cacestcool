const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: String,
      require: true,
    },
    like: [
      { type: Schema.Types.ObjectId, ref: "User", isLiked: { type: Boolean } },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
