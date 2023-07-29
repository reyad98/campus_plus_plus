import React, { useState } from "react";
import img10 from "../images/img10.jpg";
import img14 from "../images/img14.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import "./Teachers.css"; // Import the CSS file for styling

const teachersData = [
  {
    id: 1,
    name: "Khalid Hasan",
    designation: "Assistant Professor",
    subject: "Mathematics",
    employeeId: "EMP001",
    email: "john.doe@example.com",
    phone: "1234567890",
    imageSrc: img8,
  },
  {
    id: 2,
    name: "Anisur Rahman",
    designation: "Assistant Professor",
    subject: "English",
    employeeId: "EMP002",
    email: "jane.smith@example.com",
    phone: "9876543210",
    imageSrc: img6,
  },
  {
    id: 3,
    name: "Siam Specialist",
    designation: "CDI Teacher",
    subject: "Science",
    employeeId: "EMP003",
    email: "bj@example.com",
    phone: "4567891230",
    imageSrc: img14,
  },
  {
    id: 4,
    name: "Emily Wilson",
    designation: "Bangla Teacher",
    subject: "Bangla",
    employeeId: "EMP004",
    email: "emily.wilson@example.com",
    phone: "9871234560",
    imageSrc: img10,
  },
  {
    id: 5,
    name: "David Brown",
    designation: "Science Teacher",
    subject: "Science",
    employeeId: "EMP005",
    email: "david.brown@example.com",
    phone: "1237894560",
    imageSrc: img7,
  },
];

const Teachers = () => {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [searchText, setSearchText] = useState("");

  const subjects = ["All", "Bangla", "English", "Mathematics", "Science"];

  const handleChangeSubject = (e) => {
    setSelectedSubject(e.target.value);
    setSearchText(""); // Reset search text when changing subject filter
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredTeachers = teachersData.filter(
    (teacher) =>
      (selectedSubject === "All" || teacher.subject === selectedSubject) &&
      teacher.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="teachers-container">
      <h2>Teachers of Coding Academy</h2>
      <div className="teachers-box">
        <div className="teachers-list">
          {filteredTeachers.length === 0 ? (
            <p className="not_found">Opps! No Results Found 🙁</p>
          ) : (
            filteredTeachers.map((teacher) => (
              <div key={teacher.id} className="teacher-card">
                <div className="teacher-image">
                  <img src={teacher.imageSrc} alt={teacher.name} />
                </div>
                <div className="teacher-details">
                  <h3 style={{ margin: 0 }}>
                    <strong>{teacher.name}</strong>
                  </h3>
                  <p>{teacher.designation}</p>
                  <p>
                    <strong>Subject:</strong> {teacher.subject}
                  </p>
                  <p>
                    <strong>Employee ID:</strong> {teacher.employeeId}
                  </p>
                  <p>
                    <strong>Email:</strong> {teacher.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {teacher.phone}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="teachers-sidebar">
          <h3>Search Teachers</h3>
          <select value={selectedSubject} onChange={handleChangeSubject}>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search teachers..."
              value={searchText}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
