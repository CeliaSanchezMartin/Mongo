const mongoose = require("mongoose");

const teachers = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
})
const subjects = new mongoose.Schema({
    title: String,
    teachers:[teachers],
})


const marks = new mongoose.Schema({
    date: String,
    mark: Number,
    subjects: [subjects]
})

const students = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [marks]

})

mongoose.connect('mongodb+srv://celiasanchezmartin6:celiasanchezmartin6@cluster0.czhgiyn.mongodb.net/Escuela',
                    {useNewUrlParser: false, useUnifiedTopology: false});

let Teachers = mongoose.model("Teachers", teachers);
let Marks = mongoose.model("Marks", marks);
let Subjects = mongoose.model("Subjects", subjects);
let Students = mongoose.model("Students", students);


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

let subject1 = new Subjects({
    title:"Matematicas",
    teachers: [teacher1, teacher2]
});

let subject2 = new Subjects({
    title:"Fisica",
    teachers: [teacher4, teacher3]
});

let subject3 = new Subjects({
    title:"Quimica",
    teachers: [teacher2, teacher3]
});
let subject4 = new Subjects({
    title:"Algebra",
    teachers: [teacher1, teacher4]
});

let mark1 = new Marks ({
    date:"09/09/2023",
    mark: 6,
    subjects: subject1
})

let mark2 = new Marks ({
    date:"09/04/2023",
    mark: 10,
    subjects: subject2
})

let mark3 = new Marks ({
    date:"03/09/2023",
    mark: 8,
    subjects: subject3
})

let mark4 = new Marks ({
    date:"09/09/2027",
    mark: 7,
    subjects: subject4
})

let student1 = new Students ({
    firstName: "Guille",
    lastName: "Pilila",
    marks: [mark1, mark2]
})

let student2 = new Students ({
    firstName: "Tobo",
    lastName: "Pilila",
    marks: [mark2, mark3]
})

let student3 = new Students ({
    firstName: "Maria",
    lastName: "Pilila",
    marks: [mark1, mark3]
})

let student4 = new Students ({
    firstName: "Anna",
    lastName: "Pilila",
    marks: [mark3, mark2]
})


Teachers.insertMany([teacher1, teacher2, teacher3, teacher4])
.then(function(docs) {
    console.log("Profesores insertados");
})
.catch(function (err) {
    console.log(err);
})

Subjects.insertMany([subject1, subject2, subject3, subject4])
.then(function(docs) {
    console.log("Asignaturas insertadas");
})
.catch(function (err) {
    console.log(err);
})

Marks.insertMany([mark1, mark2, mark3, mark4])
.then(function(docs) {
    console.log("Notas insertados");
})
.catch(function (err) {
    console.log(err);
})

Students.insertMany([student1, student2, student3, student4])
.then(function(docs) {
    console.log("Estudiantes insertados");
})
.catch(function (err) {
    console.log(err);
})


//Mostrar por consola.
// - Todas las notas de un alumno.
// - Todos las asignaturas de un alumno.
// - Todos los profesores de un alumno.

Students.findOne({ firstName: "Guille"})
.then((student) => {
    student.marks.forEach((mark) => {
        console.log(`Las notas de Guille son  ${mark.mark} `);
    })

    student.marks.forEach((mark) => {
        console.log(`Las asignaturas de Guille son   ${mark.subjects.title} `);
    })

})
.catch((err) => {
    console.log(err);
})
/*
Students.findOne({ firstName: "Tobo"})
.then((student) => {
    student.marks.forEach((mark) => {
        console.log(`Las asignaturas de Tobo son   ${mark.subjects.title} `);
    })
})
.catch((err) => {
    console.log(err);
})

Students.findOne({ firstName: "Anna"})
.then((student) => {
    student.marks.forEach((mark) => {
        mark.subjects.teachers.forEach((teacher) => {
        console.log(`Las profesores de Anna son   ${teacher.firstName} `);
        });
    })
})
.catch((err) => {
    console.log(err);
})

*/