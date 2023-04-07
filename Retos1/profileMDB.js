const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: {type: String,
            require: true},
    surname: {type: String},
    dateOfBirth: {type:Date},
    comments: {type: String},
    role: {type: String}
})

module.exports = mongoose.model("Profile", ProfileSchema)