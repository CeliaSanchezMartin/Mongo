const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://celiasanchezmartin6:celiasanchezmartin6@cluster0.czhgiyn.mongodb.net/Retos3',
                    {useNewUrlParser: false, useUnifiedTopology: false});

const TeacherSchema =new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String
})

const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [TeacherSchema]

})

let Teacher = mongoose.model("Teacher", TeacherSchema);
let Marks = mongoose.model("Marks", MarksSchema);

let teacher1 = new Teacher({teacher_first_name: "Celia",teacher_last_name: "Sánchez"});
let teacher2 = new Teacher({teacher_first_name: "Jesus",teacher_last_name: "Toboso"});
let teacher3 = new Teacher({teacher_first_name: "Pepi",teacher_last_name: "Alvarez"});
let teacher4 = new Teacher({teacher_first_name: "Esther",teacher_last_name: "Perez"});
let teacher5 = new Teacher({teacher_first_name: "Dani",teacher_last_name: "López"});
let teacher6 = new Teacher({teacher_first_name: "Andrea",teacher_last_name: "Sánchez"});
let teacher7 = new Teacher({teacher_first_name: "Maria",teacher_last_name: "Art"});
let teacher8 = new Teacher({teacher_first_name: "Piter",teacher_last_name: "Art"});
let teacher9 = new Teacher({teacher_first_name: "Félix",teacher_last_name: "Gonzalez"});
let teacher10 = new Teacher({teacher_first_name: "Ares",teacher_last_name: "Potas"});
/*
Teacher.insertMany([teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9, teacher10])
.then(function() {
    console.log("Profesores insertados correctamente");
})
.catch(function (err) {
    console.log(err);
})
*/
let mark1 = new Marks({date:("2022-07-03"), mark: 3, student_first_name:"Mar", student_last_name:"Mas", group_name: "Sella", subject_name:"Matematiques", teachers:[teacher1, teacher3]});
let mark2 = new Marks({date:("2020-03-09"), mark: 4, student_first_name:"Maria", student_last_name:"Gadea", group_name: "Sella", subject_name:"Fisica", teachers:[teacher2, teacher4]});
let mark3 = new Marks({date:("2019-09-10"), mark: 5, student_first_name:"Anna", student_last_name:"Bou", group_name: "Berlin", subject_name:"Quimica", teachers:[teacher3, teacher5]});
let mark4 = new Marks({date:("2018-10-12"), mark: 6, student_first_name:"Ele", student_last_name:"Alemany", group_name: "Alacant", subject_name:"Biologia", teachers:[teacher4, teacher6]});
let mark5 = new Marks({date:("2017-02-12"), mark: 7, student_first_name:"Mari", student_last_name:"Jaime", group_name: "Benidorm", subject_name:"Algebra", teachers:[teacher5]});
let mark6 = new Marks({date:("2016-07-03"), mark: 8, student_first_name:"Vera", student_last_name:"Cruz", group_name: "Dublin", subject_name:"Fisiologia Vegetal", teachers:[teacher10]});
let mark7 = new Marks({date:("2020-12-12"), mark: 9, student_first_name:"Aura", student_last_name:"Barbato", group_name: "Dublin", subject_name:"Contrucciones", teachers:[teacher7, teacher9]});
let mark8 = new Marks({date:("2021-07-03"), mark: 10, student_first_name:"Hugo", student_last_name:"Barrachina", group_name: "Sella", subject_name:"Hidaulica", teachers:[teacher1, teacher4]});
let mark9 = new Marks({date:("2023-02-02"), mark: 9, student_first_name:"Pau", student_last_name:"Cantó", group_name: "Alacant", subject_name:"Riegos", teachers:[teacher10, teacher9]});
let mark10 = new Marks({date:("2021-07-03"), mark: 3, student_first_name:"Carles", student_last_name:"Olcina", group_name: "La vila", subject_name:"Genetica", teachers:[teacher5, teacher8]});
let mark11 = new Marks({date:("2023-07-03"), mark: 7, student_first_name:"Pepito", student_last_name:"Grillo", group_name: "Sella", subject_name:"Matematiques", teachers:[teacher1, teacher3]});
let mark12 = new Marks({date:("2022-07-03"), mark: 7, student_first_name:"Juanito", student_last_name:"Grillo", group_name: "Benidorm", subject_name:"Biologia", teachers:[teacher1, teacher3]});
let mark13 = new Marks({date:("2021-07-03"), mark:10, student_first_name:"Menganito", student_last_name:"Grillo", group_name: "Alacant", subject_name:"Algebra", teachers:[teacher5, teacher6]});
let mark14 = new Marks({date:("2020-07-03"), mark: 9, student_first_name:"Pepa", student_last_name:"Grillo", group_name: "Berlin", subject_name:"Construcciones", teachers:[teacher8, teacher9]});





// Marks.insertMany([mark12, mark13, mark14])
// .then(function() {
//     console.log("Notas insertados correctamente");
// })
// .catch(function (err) {
//     console.log(err);
// })


//clacular la nota media de los alumnos de una asigantura.
// Marks.aggregate([
//     { $match: { subject_name: "Matematiques" } }, 
//     { $group: { _id: null, avgMark: { $avg: "$mark" } } } 
// ])
// .then(result => {
//     const avgMark = result[0].avgMark; 
//     console.log(`La nota media de Matemátiques es: ${avgMark}`);
// })
// .catch(error => {
//     console.error(error);
// });

// //Calcular numero total de alumnos.

// Marks.aggregate([
//     { $group: { _id: null, count: { $sum: 1 } } }
//   ])
//   .then(result => {
//     console.log("Número total de alumnos: " + result[0].count); 
//   })
//   .catch(err => {
//     console.log(err);
//   });


// //Lista nombre y apellidos de todos los alumnos.


// Marks.aggregate([
//     {
//         $project: 
//             { "Nombre": "$student_first_name", "Apellido": "$student_last_name", _id: 0},

//     },
    
// ]).then((result) => {
//     console.log(result); 
// }).catch((err) => {
//     console.log(err);
// });

// //Lista de nombre y apellidos de todos los profes.
// Teacher.aggregate([
//         {
//             $project: 
//             { "Nombre del profesor": "$teacher_first_name", "Apellido del profesor": "$teacher_last_name", _id:0},
          
//         },
//       ])
// .then((result) => {
//     console.log(result); 
// })
// .catch((err) => {
//     console.log(err);
// });

//Mostrar el numero de alumnos por grupo en orden inverso al alfabeto.

// Marks.aggregate([
//     {
//       $group: {
//         _id: "$group_name", totalStudents: { $sum: 1 }
//       }
//     },
//     {
//       $sort: { _id: -1 }
//     }
// ]).then(result => {
//   console.log(result);
// }).catch(err => {
//     console.log(err);
// });

//Obtener el top 5 de asignaturas cuya nota media sea mayor ue 5.

// Marks.aggregate([
//     {
//       $group: {
//         _id: "$subject_name", avgGrade: { $avg: "$mark" }
//       }
//     },
//     {
//       $match: {
//         avgGrade: { $gt: 5 }
//       }
//     },
//     {
//       $sort: {
//         avgGrade: -1
//       }
//     },
//     {
//       $limit: 5
//     },

// ]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });

//Calcular numero de profesores por asignatura.
// Teacher.aggregate([
   
//     {
//       $group: {
//         _id: { subject_name: "$subject_name", teacher: { $concat: [ "$teacher_first_name", " ", "$teacher_last_name" ] } },
//         count: { $sum: 1 } 
//       }
//     }
// ]).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });

//Obten nombre, apellido y nota de los alumnos que tengan una nota mayor de 8 o la nota tenga fecha del año pasado o anterior.
// Marks.find({
//     $or: [
//       { mark: { $gt: 8 } },
//       { date: { $lt: new Date("2022-01-01") } }
//     ]
//   }, {
//     student_first_name: 1, student_last_name: 1, mark: 1, _id: 0
//   }).then((result) => {
//     console.log(result);
//   }).catch((err) => {
//     console.log(err);
//   });

//Nota media de las asignaturas del utimo año por asignatura.
// Marks.aggregate([
//     {
//       $match: {
//         date: { $gte: new Date("2022-04-01") }
//       }
//     },
//     {
//       $group: {
//         _id: "$subject_name", avgMark: { $avg: "$mark" } 
//       }
//     },
//   ])
//   .then(result => {
//     console.log("Nota media por asignatura del ultimo año:" );
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error);
//   });

//Media de nota por alumno del ultimo año.
Marks.aggregate([
    {
      $match: {
        date: {
            $gte: new Date("2022-04-01") 
        }
      }
    },
    {
      $group: {
        _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" },
        avgMark: { $avg: "$mark" }
      }
    }
]).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

//Obten nombre, cantidad asignaturas por alumno con el profesor X.
Teacher.aggregate([
   
    {
      $match: {
        "teacher_first_name": "Celia"
      }
    },
    {
      $group: {
        _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" }, count: { $sum: 1 } 
      }
    }
  ]).then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  });

  


  
