const studentController=require('../controller/studentController.js');

const express=require('express');
const app=express();
app.use(express.json());

//get Student details
app.get('/getAllStudent',studentController.getAllStudent);
app.get('/getStudentById/:id',studentController.getStudentById);

//Save the Students
app.post('/saveStudent',studentController.saveStudent);

//update the Students
app.put('/updateStudentbyId/:id',studentController.updateStudent);

//Delete the Student
app.delete('/deleteStudentById/:id',studentController.deleteStudentById);

module.exports=app;