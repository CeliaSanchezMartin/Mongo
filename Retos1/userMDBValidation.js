const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        require: true
    },
    password: {
        type:String,
        require: true,
        validate:[
            function(password){
                return password.lenght > 6;
            },
            'El password debe tener más de 6 caracteres'],
        select: false
    }
});

// UserSchema.pre('save', function(next){
//     console.log("Middleware de entrada");
//     if (this.password.match(/\d/)){
//         console.log("La coontraseña es correcta");
//         next();
//     } else {
//         console.log("La contraseña debe incluir numeros");

//     }
// });

module.exports = mongoose.model("UserValidation", userSchema)