import React from "react";
import { Link } from "react-router-dom";
import foot1 from "../images/foot1.jpg";
import tree1 from "../images/tree1.jpg";
import "./RecentActivity.css"; // Import the CSS file for styling

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      title: "কলেজ ফুটবল টুর্নামেন্ট",
      image: foot1,
      date: "12 July,2023",
    },
    {
      id: 2,
      title: "ট্রি প্ল্যান্টেশন প্রোগ্রাম",
      image: tree1,
      date: "23 July,2023",
    },
    {
      id: 3,
      title: "ক্লাব বিতর্ক প্রতিযোগিতা",
      image: foot1,
      date: "10 May,2023",
    },
    // Add more activities as needed
  ];

  return (
    <div className="recent-activity-section">
      <h2>Latest News & Events</h2>
      <hr className="horizontal-bar" />
      <div className="activity-cards-container">
        {activities.map((activity) => (
          <div className="activity-card" key={activity.id}>
            <div className="image-container_recent">
              <img src={activity.image} alt={activity.title} />
              <div className="image-overlay">
                <h3 className="card-title">{activity.title}</h3>
              </div>
            </div>
            <div className="carddesc">
              <div className="icon_row">
                <div className="card-icon">
                  <i className="fas fa-calendar"></i>
                  <span className="card-date">{activity.date}</span>
                </div>
                <div className="user-icon">
                  <i className="fas fa-user"></i>
                  <span className="user-count">10</span>
                </div>
              </div>
              <hr className="card-bar" />
              <p>
                কলেজ ফুটবল টুর্নামেন্টে সভ্যতার প্রতিযোগিতা ও জয়ের শিক্ষার্থীদের
                প্রবণতা দেখা যাচ্ছে....
              </p>

              <Link to="/academic/latestnews" className="see-more-button">
                বিস্তারিত পড়ুন
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
