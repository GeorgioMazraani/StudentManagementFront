import React, { useState } from "react";

const CreateStudent = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addStudent({ name, gender });
      setName(""); 
    }
  };

  return (
    <div className="card shadow p-4 bg-white">
      <h2 className="text-success text-center">📋 Add a Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={!name.trim()}>
          ➕ Add Student
        </button>
      </form>
    </div>
  );
};

export default CreateStudent;
