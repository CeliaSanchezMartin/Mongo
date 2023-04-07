const mongoose = require("mongoose");

const CredentialsSchema = new mongoose.Schema({
    adress: {type: String},
    phone: {type: Number},
    email: {type:String}
})

module.exports = mongoose.model("Credentials", CredentialsSchema)