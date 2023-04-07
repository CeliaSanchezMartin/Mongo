const mongoose = require("mongoose");
const User = require("./userMDB");
const Profile = require("./profileMDB");
const Credenciales = require("./credentialsMDB");

mongoose.connect('mongodb+srv://celiasanchezmartin6:celiasanchezmartin6@cluster0.czhgiyn.mongodb.net/test',
                    {useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new User({
    login: "Juan",
    password: "password1"
})

userDocument.save()
.then((data) => 
{
    console.log(data);
})
.catch((err) => 
{
    console.log(err)
})

let profileDocument= new Profile({
    name: "Juan",
    surname: "Perez",
    dateOfBirth: 1997-02-03,
    comments: "bla bla",
    role:"admin"
})

profileDocument.save()
.then((data) => 
{
    console.log(data);
})
.catch((err) => 
{
    console.log(err)
})

let credencialesDocument= new Credenciales({
    adress: "calle falsa 123",
    phone: 696969,
    email: "jian@juan.com",
})

credencialesDocument.save()
.then((data) => 
{
    console.log(data);
})
.catch((err) => 
{
    console.log(err)
})