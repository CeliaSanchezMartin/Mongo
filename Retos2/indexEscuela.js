const mongoose = require("mongoose");
const Teachers = require("./schemaEscuela");
const Subject = require("./schemaEscuela");
const Marks = require(".schemaEscuela");
const Students = require("./schemaEscuela");

mongoose.connect('mongodb+srv://celiasanchezmartin6:celiasanchezmartin6@cluster0.czhgiyn.mongodb.net/Escuela',
                    {useNewUrlParser: false, useUnifiedTopology: false});

let teacher1 = new Teachers({
    firstName: "Celia",
    lastName: "Sánchez",
    groups: ["1", "2"]
})

let teacher2 = new Teachers({
    firstName: "Paula",
    lastName: "Sánchez",
    groups: ["2", "3"]
})

let teacher3 = new Teachers({
    firstName: "Elena",
    lastName: "Sánchez",
    groups: ["3", "2"]
})

let teacher4 = new Teachers({
    firstName: "Ana",
    lastName: "Sánchez",
    groups: ["3", "4"]
})

let subject1 = new Subject({
    title:"Matematicas",
    teachers: [teacher1, teacher2]
});

let subject2 = new Subject({
    title:"Fisica",
    teachers: [teacher4, teacher3]
});

let subject3 = new Subject({
    title:"Quimica",
    teachers: [teacher2, teacher3]
});
let subject4 = new Subject({
    title:"Algebra",
    teachers: [teacher1, teacher4]
});

let mark1 = new Marks ({
    date:"09/09/2023",
    mark: 6,
    subject1: subject1
})

let mark2 = new Marks ({
    date:"09/04/2023",
    mark: 10,
    subject1: subject2
})

let mark3 = new Marks ({
    date:"03/09/2023",
    mark: 8,
    subject1: subject3
})

let mark4 = new Marks ({
    date:"09/09/2027",
    mark: 7,
    subject1: subject4
})

Teachers.insertMany([teacher1, teacher2, teacher3, teacher4])
.then(function(docs) {
    console.log("Profesores insertados");
})
.catch(function (err) {
    console.log(err);
})
