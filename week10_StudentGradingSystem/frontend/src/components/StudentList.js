import React from "react";

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <strong>{student.name}</strong> - {student.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
