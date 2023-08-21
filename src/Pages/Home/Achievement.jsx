import React from "react";
import "./Achievement.css";

import achi1 from "../images/achievement1.jpg";
import img2 from "../images/img2.jpg";
import img1 from "../images/news1.jpg";
import img10 from "../images/news2.jpg";
import achi2 from "../images/news3.jpg";

const achievementsData = [
  {
    title: "Intra School Champion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageSrc: img1,
  },
  {
    title: "Ranked Top 10 School in BD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageSrc: img10,
  },
  {
    title: "Intra School Champion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageSrc: achi2,
  },
  {
    title: "Ranked Top 10 School in BD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageSrc: img2,
  },
  {
    title: "Intra School Champion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageSrc: achi2,
  },
  {
    title: "Ranked Top 10 School in BD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageSrc: img2,
  },
  // Add more achievements here...
];

const Achievement = ({ limit }) => {
  return (
    <div className="achievement-section">
      <div className="achievement-logo">
        <h2>Achievements</h2>
        {/* Add your achievement logo here */}
        <img src={achi1} alt="Achievement Logo" />
      </div>
      {achievementsData.slice(0, limit).map((achievement, index) => (
        <div key={index} className="achievement-card">
          <img src={achievement.imageSrc} alt={achievement.title} />
          <div className="overlay">
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            <div className="bar"></div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
