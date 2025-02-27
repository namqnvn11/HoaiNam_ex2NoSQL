const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

//GET http://localhost:5000/api/students
router.get('/students', studentController.getAllStudents);
//GET http://localhost:5000/api/students/2
router.get('/students/:id', studentController.getStudentById);
//GET http://localhost:5000/api/students/major/Computer Science
router.get('/students/major/:major', studentController.getStudentsByMajor);
//GET http://localhost:5000/api/students/marketing/above8
router.get('/students/marketing/above8', studentController.getStudentsByMarketingGrade);
//PUT http://localhost:5000/api/students/:id/age
router.put('/students/:id/age', studentController.updateStudentAge);
//DELETE http://localhost:5000/api/students/:id
router.delete('/students/:id', studentController.deleteStudent);
//DELETE http://localhost:5000/api/students/math/below70
router.delete('/students/math/below70', studentController.deleteStudentsByMathGrade);
//POST http://localhost:5000/api/students
router.post('/students', studentController.createStudent);
    
module.exports = router; 