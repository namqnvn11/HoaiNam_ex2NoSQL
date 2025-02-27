const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findOne({ studentId: req.params.id });
    if (!student) {
      return res.status(404).json({ message: 'Không tìm thấy sinh viên' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentsByMajor = async (req, res) => {
  try {
    const students = await Student.find({ major: req.params.major });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentsByMarketingGrade = async (req, res) => {
  try {
    const students = await Student.find({ 'grades.Marketing': { $gte: 8 } });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStudentAge = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { studentId: req.params.id },
      { age: req.body.age },
      { new: true }
    );
    if (!student) {
      return res.status(404).json({ message: 'Không tìm thấy sinh viên' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ studentId: req.params.id });
    if (!student) {
      return res.status(404).json({ message: 'Không tìm thấy sinh viên' });
    }
    res.json({ message: 'Đã xóa sinh viên thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteStudentsByMathGrade = async (req, res) => {
  try {
    const result = await Student.deleteMany({ 'grades.Math': { $lt: 70 } });
    res.json({ message: `Đã xóa ${result.deletedCount} sinh viên` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { studentId, name, age, gender, dateOfBirth, major, grades } = req.body;
    
    // Kiểm tra xem studentId đã tồn tại chưa
    const existingStudent = await Student.findOne({ studentId });
    if (existingStudent) {
      return res.status(400).json({ message: 'Mã sinh viên đã tồn tại' });
    }

    const student = new Student({
      studentId,
      name,
      age,
      gender,
      dateOfBirth,
      major,
      grades
    });

    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 