const mongoose = require("mongoose");
const Photo = require("./schemaPhotos");
const { error } = require("console");

mongoose.connect('mongodb+srv://celiasanchezmartin6:celiasanchezmartin6@cluster0.czhgiyn.mongodb.net/Photos',
                    {useNewUrlParser: false, useUnifiedTopology: false});

// let newPhoto = new Photo({
//     usuario: "Pepito",
//     url: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1",
//     title: "Paris",
//     description: "oh la laaaaa, paguiiiiii"
// })

// newPhoto.save()
// .then((data) =>
// {
//     console.log(data);
// })
// .catch((err) => 
// {
//     console.log(err);
// })

// let Photos = [
//     {
//         usuario: "Juanito",
//         url: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1",
//         title: "Paris",
//         description: "oh la laaaaa, paguiiiiii"
//     },

//     {
//         usuario: "Menganito",
//         url: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1",
//         title: "Paris",
//         description: "oh la laaaaa, paguiiiiii"
//     },

//     {
//         usuario: "Pepito",
//         url: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1",
//         title: "Paris",
//         description: "oh la laaaaa, paguiiiiii"
//     }
// ];

// Photo.insertMany(Photos)
// .then(function(){
//     console.log("Data inserted");
// })
// .catch(function(err){
//     console.log(err);
// })

function guardarEnColeccion(usuario, url, title, description){
    const newPhoto = new Photo({
        usuario: usuario,
        url: url,
        title: title,
        description: description
    });

    return newPhoto.save()
    .then((res) => {
        console.log(`Foto ${res.title} subida con exito`);
    })
    .catch((err) => {
        console.log(err);
    })
}

guardarEnColeccion("Pepito", "https://us.123rf.com/450wm/aprillrain/aprillrain2209/aprillrain220900194/191556087-imagen-abstracta-de-los-cielos-abiertos-el-camino-el-camino-al-cielo-ilustraci%C3%B3n-de-alta-calidad.jpg?ver=6","Dios", "Invasión Alienigena" );

//Obtener fotos:

function obtenerFotos(usuario){
    return Photo.find({usuario: usuario})
    .then((fotos) => {
        console.log(`El usuario ${usuario} tiene estas fotos ${fotos}`);
        return fotos;
    })
    .catch((err) => {
        console.log(err);
    })
}
obtenerFotos("Pepito");



//Modificar foto.

function modificarDescripcion(title, newDescription){
    Photo.updateOne({title: title}, {description: newDescription})
    .then((res) => {
        console.log(`Se ha modificado la foto con título ${title}`);
    })
    .catch((err) => {
        console.log(error);
    })
}

modificarDescripcion("Dios", "Sin invasion alienigena")






//Borrar una foto.

function borrarFoto(usuario, title){
    return Photo.deleteOne({usuario: usuario}, {title: title})
    .then((res) => {
        console.log("Foto eliminada: ", res);
    })
    .catch((err) => {
        console.log(err);
    })
}

borrarFoto("Pepito", "Paris");




//Eliminar todas las fotos.

function borrarTodas(usuario){
   return Photo.deleteMany({usuario: "Pepito"})
.then(function (res) {
    console.log("Fotos eliminadas con exito");
})
.catch(function(err) {
    console.log(err);
})
}

borrarTodas("Pepito")
