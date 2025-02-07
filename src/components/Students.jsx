import React from "react";

const Students = ({ students, removeStudent }) => {
  return (
    <div className="student-list">
      <h2 className="text-primary text-center">📜 Students List</h2>
      {students.length === 0 ? (
        <p className="text-center text-muted">No students added yet.</p>
      ) : (
        <ul className="list-group">
          {students.map((student, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span className="fw-bold">{student.name}</span>
              <div>
                <span className={`badge ${student.gender === "male" ? "bg-primary" : "bg-danger"} rounded-pill`}>
                  {student.gender}
                </span>
                <button 
                  className="btn btn-outline-danger btn-sm ms-2" 
                  onClick={() => removeStudent(student.id)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Students;
