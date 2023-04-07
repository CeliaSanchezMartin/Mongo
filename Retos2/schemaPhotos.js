const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    unsuario: {
        type: String,
    },
    url: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    }

});

module.exports = mongoose.model("Photos", PhotosSchema)