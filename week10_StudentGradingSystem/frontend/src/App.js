import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";
import logo from "./assets/img.png";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (name, course) => {
    if (name && course) {
      const newStudent = {
        id: Date.now(),
        name,
        course,
      };
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Student Recording System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default App;
