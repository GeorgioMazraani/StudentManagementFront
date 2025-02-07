import React, { useEffect, useState } from "react";
import Students from "./components/Students";
import CreateStudent from "./components/CreateStudent";
import axios from "axios";
const API_URL = "https://reactstudentsapi.onrender.com/students";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        if (response.data.success) {
          setStudents(response.data.data);
        }
      }
      ).catch(error => console.error("Error fetching students:", error));
  }, [])
  const addStudent = async (newStudent) => {
    try {
      const response = await axios.post(API_URL, newStudent);
      if (response.data.success) {
        setStudents([...students, response.data.data]); 
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const removeStudent = async(id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      if(response.data.success){
        setStudents(students.filter(student=>student.id!==id));
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
    
  };

  const clearData = async () => {
    try {
      await Promise.all(students.map(student => axios.delete(`${API_URL}/${student.id}`)));
      setStudents([]);
    } catch (error) {
      console.error("Error clearing students:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">Student Management System</h1>
        <p className="text-muted">Easily add and manage students</p>
      </div>

      <div className="row">
        <div className="col-lg-5 col-md-6 mx-auto mb-4">
          <CreateStudent addStudent={addStudent} />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="student-container card shadow p-4">
            <Students students={students} removeStudent={removeStudent} />
          </div>
          {students.length > 0 && (
            <button className="btn btn-danger w-100 mt-3" onClick={clearData}>
              ❌ Clear All Students
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
