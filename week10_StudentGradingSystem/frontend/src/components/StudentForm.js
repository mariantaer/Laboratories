import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !course) {
      setError("Both fields are required!");
      return;
    }
    addStudent(name, course);
    setName("");
    setCourse("");
    setError("");
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <div className="student-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => handleInputChange(e, setName)}
          style={error ? { borderColor: 'red' } : {}}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => handleInputChange(e, setCourse)}
          style={error ? { borderColor: 'red' } : {}}
        />
        <button type="submit">Add Student</button>
      </form>
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
    </div>
  );
};

export default StudentForm;
