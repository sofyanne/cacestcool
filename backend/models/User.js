const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({

    firstname : {
        type: String,
        require: true
    },
    lastname : {
        type: String,
        require: true
    },
    avatar : {
        type: String,
        require: true
    },
    posts : [
        {
            type: Schema.Types.ObjectId, ref: "Post"
        }
    ]

});

module.exports = mongoose.model("User", userSchema);