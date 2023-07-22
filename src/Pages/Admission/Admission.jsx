import {
  faEnvelope,
  faPen,
  faSchool,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Admission.css"; // CSS for styling

const Admission = () => {
  return (
    <div className="admission-page">
      <h2>Admission Page</h2>
      <p>
        Welcome to our school's admission page. We are excited to have you join
        our school community!
      </p>
      <div className="admission-steps">
        <div className="admission-step">
          <FontAwesomeIcon icon={faUser} className="step-icon" />
          <p>Step 1: Fill out the online application form.</p>
        </div>
        <div className="admission-step">
          <FontAwesomeIcon icon={faEnvelope} className="step-icon" />
          <p>Step 2: Submit required documents via email.</p>
        </div>
        <div className="admission-step">
          <FontAwesomeIcon icon={faPen} className="step-icon" />
          <p>Step 3: Appear for the entrance exam.</p>
        </div>
        <div className="admission-step">
          <FontAwesomeIcon icon={faSchool} className="step-icon" />
          <p>Step 4: Congratulations! You are now a part of our school.</p>
        </div>
      </div>
    </div>
  );
};

export default Admission;
