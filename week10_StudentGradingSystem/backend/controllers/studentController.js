const { v4: uuidv4 } = require("uuid");
let students = [];


const getStudents = (req, res) => res.json(students);


const addStudent = (req, res) => {
    const { name, course } = req.body;
    const newStudent = { id: uuidv4(), name, course };
    students.push(newStudent);
    res.status(201).json(newStudent);
};


const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, course } = req.body;
    const student = students.find(s => s.id === id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    student.name = name;
    student.course = course;
    res.status(200).json(student);
};


module.exports = { getStudents, addStudent, updateStudent };
