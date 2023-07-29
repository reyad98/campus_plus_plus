import React, { useState } from "react";
import LivePreview from "./LivePreview";
import "./ResultCard.css";

const calculateGrade = (mark) => {
  if (mark >= 80) {
    return "A+";
  } else if (mark >= 70) {
    return "A";
  } else if (mark >= 60) {
    return "B";
  } else if (mark >= 50) {
    return "C";
  } else if (mark >= 40) {
    return "D";
  } else {
    return "F";
  }
};

const ResultCard = () => {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [subjectMark, setSubjectMark] = useState("");

  const addSubject = () => {
    if (subjectName && subjectMark) {
      const mark = parseInt(subjectMark); // Parse the mark as an integer
      if (!isNaN(mark)) {
        const grade = calculateGrade(mark);
        setSubjects([...subjects, { name: subjectName, mark, grade }]);
        setSubjectName("");
        setSubjectMark("");
      } else {
        alert("Please enter a valid numeric mark for the subject.");
      }
    }
  };

  const deleteSubject = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };
  return (
    <div className="container">
      <div className="mark_input">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Student ID:</label>
          <input
            type="text"
            className="form-input"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Subject Name:</label>
          <input
            type="text"
            className="form-input"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <label className="form-label">Subject Mark:</label>
          <input
            type="text"
            className="form-input"
            value={subjectMark}
            onChange={(e) => setSubjectMark(e.target.value)}
          />
          <button className="add-subject-button" onClick={addSubject}>
            Add Subject
          </button>
        </div>
        <div className="subject-list">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-item">
              <div className="subject-info">
                <span className="subject-name">{subject.name}</span>
                <span className="subject-mark">{subject.mark}</span>
                <span className="subject-grade">
                  {calculateGrade(subject.mark)}
                </span>
              </div>
              <button
                className="delete-button"
                onClick={() => deleteSubject(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="pdf_width">
        <LivePreview data={{ name, studentId, subjects }} />
      </div>
    </div>
  );
};

export default ResultCard;
