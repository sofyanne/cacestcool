const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

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

});

module.exports = mongoose.model("User", userSchema);