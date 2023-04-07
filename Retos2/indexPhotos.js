const mongoose = require("mongoose");
const Photo = require("./schemaPhotos");

mongoose.connect('mongodb+srv://celiasanchezmartin6:celiasanchezmartin6@cluster0.czhgiyn.mongodb.net/Photos',
                    {useNewUrlParser: false, useUnifiedTopology: false});

let newPhoto = new Photo({
    usuario: "Pepito",
    url: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1",
    title: "Paris",
    description: "oh la laaaaa, paguiiiiii"
})
/*
newPhoto.save()
.then((data) =>
{
    console.log(data);
})
.catch((err) => 
{
    console.log(err);
})

let Photos = [
    {
        usuario: "Juanito",
        url: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1",
        title: "Paris",
        description: "oh la laaaaa, paguiiiiii"
    },

    {
        usuario: "Menganito",
        url: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1",
        title: "Paris",
        description: "oh la laaaaa, paguiiiiii"
    },

    {
        usuario: "Pepito",
        url: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1",
        title: "Paris",
        description: "oh la laaaaa, paguiiiiii"
    }
];

Photo.insertMany(Photos)
.then(function(){
    console.log("Data inserted");
})
.catch(function(err){
    console.log(err);
})

//Obtener fotos:
const findPhotos = () => {
    return Photo.find({title:"Paris"}).exec();
};

findPhotos()
.then((photos) => {
    console.log(photos);
})
.catch((err) => {
    console.log(err);
})


//Modificar foto.

let newDescription = "Holi me encantan las fotos";

Photo.updateOne({ title: "Paris"}, {description:newDescription})
.then(res => {
    console.log("Foto actualizada con exito");
})
.catch(err => {
    console.log(err);
})


//Borrar una foto.

Photo.deleteOne({ usuario: "Pepito" , title: "Paris"})
.then(function(res) {
    console.log("Foto eliminada con exito");
})
.catch(function(err) {
    console.log("Error al eliminar la foto");
})
*/

//Eliminar todas las fotos.
Photo.deleteMany({usuario: "Pepito"})
.then(function (res) {
    console.log("Fotos eliminadas con exito");
})
.catch(function(err) {
    console.log(err);
})