// NoticeBar.js
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Notice.css"; // CSS for styling

const Notice = () => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    marqueeRef.current.stop();
  };

  const handleMouseLeave = () => {
    marqueeRef.current.start();
  };

  return (
    <div className="notice-bar">
      <div className="latest-notice">
        <Link to="/notice">
          <i className="fas fa-bell"></i> Latest Notice
        </Link>
      </div>
      <div
        className="notice-text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <marquee
          ref={marqueeRef}
          behavior="scroll"
          direction="left"
          scrollamount="5" // Adjust the scroll speed as needed
        >
          <span>২০২৩ সালের আন্তঃ স্কুল ফুটবল টুর্নামেন্ট শুরু!!!</span>
        </marquee>
      </div>
    </div>
  );
};

export default Notice;
