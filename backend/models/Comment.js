const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentarySchema = Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("comment", CommentarySchema);