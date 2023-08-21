import React, { useState } from "react";
import NoticePage from "../NoticePage/NoticePage";
import "./DashBoard.css";

function DashBoard() {
  const [selectedSection, setSelectedSection] = useState("Caresol Image");

  const sidebarItems = [
    "Caresol Image",
    "Notice Board",
    "Exam Results",
    "Gallery",
    "News",
    "Achievements",
  ];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        {sidebarItems.map((item) => (
          <div
            key={item}
            className={`sidebar-item ${
              selectedSection === item ? "active" : ""
            }`}
            onClick={() => setSelectedSection(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="content">
        {/* Content section based on selectedSection */}
        {selectedSection === "Caresol Image" && <CaresolImage />}
        {selectedSection === "Notice Board" && <NoticePage></NoticePage>}
        {selectedSection === "Exam Results" && <ExamResults />}
        {selectedSection === "Gallery" && <Gallery />}
        {selectedSection === "News" && <News />}
        {selectedSection === "Achievements" && <Achievements />}
      </div>
    </div>
  );
}

function CaresolImage() {
  return <div>Caresol Image Content</div>;
}

function NoticeBoard() {
  return <div>Notice Board Content</div>;
}

function ExamResults() {
  return <div>Exam Results Content</div>;
}

function Gallery() {
  return <div>Gallery Content</div>;
}

function News() {
  return <div>News Content</div>;
}

function Achievements() {
  return <div>Achievements Content</div>;
}

export default DashBoard;
