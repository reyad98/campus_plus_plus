// Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoardResult from "../Result/BoardResult";
import img13 from "../images/02.jpg";
import img12 from "../images/2363316.jpg";
import img1 from "../images/img1.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import kfts from "../images/kfts.jpg";
import news1 from "../images/news1.jpg";
import trans1 from "../images/trans1.jpg";
import Achievement from "./Achievement";

import News from "../Academic/News";
import NoticePage from "../NoticePage/NoticePage";
import "./Home.css";

const Home = () => {
  const images = [img1, img2, trans1, news1, kfts];

  const imges_store = [img6, img7, img8, img3, img10, img11, img12, img13];

  // Add more achievements as needed

  const notices = [
    {
      id: 1,
      date: "12th July",
      notice: "খন্ডকালিন নিয়োগ বিজ্ঞপ্তি",
    },
    {
      id: 2,
      date: "15th July",
      notice: "২০২৩-২৪ সেশনে ভর্তির আবেদন শুরু",
    },
    {
      id: 3,
      date: "20th July",
      notice: "অর্ধবার্ষিক পরীক্ষার ফি জমা দেয়ার শেষ দিন",
    },
  ];

  const newsData = [
    {
      image: img3,
      title: "বার্ষিক সৃজন অনুষ্ঠান ২০২৩",
      content:
        "এই সপ্তাহে আমরা বার্ষিক সৃজন অনুষ্ঠানের সুখবর পেয়েছি। আপনাকে স্বাগতম।",
    },
    {
      image: img4,
      title: "প্রশাসনিক কর্মচারীদের শিক্ষা করা হয়েছে",
      content:
        "এই সপ্তাহে আমরা আমাদের প্রশাসনিক কর্মচারীদের প্রশিক্ষণের সুখবর পেয়েছি।",
    },
    {
      image: img5,
      title: "ছাত্র মেলা ২০২৩ অনুষ্ঠিত",
      content:
        "আমরা এই সপ্তাহে ছাত্র মেলা ২০২৩ অনুষ্ঠিত করেছি। আপনাকে স্বাগতম!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <section className="carousel-section">
        <div className="carousel-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        <div className="message-from-principal">
          <h2>Principal Message</h2>

          <img src={img8} alt="Principal" className="principal-image" />
          <div className="principal-info">
            <p>
              <strong>Mejor General Md Yolin MDS, MBA (Retd.)</strong>
            </p>

            <Link to="/administration/principalmessage">See More...</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <i className="fas fa-book"></i>
          <h2>Quality Education</h2>
          <p>Providing top-notch education to nurture young minds.</p>
        </div>
        <div className="feature">
          <i className="fas fa-users"></i>
          <h2>Experienced Faculty</h2>
          <p>Highly qualified and experienced teachers guiding students.</p>
        </div>
        <div className="feature">
          <i className="fas fa-laptop"></i>
          <h2>Modern Facilities</h2>
          <p>State-of-the-art infrastructure and modern learning tools.</p>
        </div>
      </section>
      <section className="welcome-section">
        <div className="left-section_home">
          <h2>Welcome to Coding Academy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod urna nec lectus vestibulum pharetra. Pellentesque eu
            dignissim felis. Duis posuere quam sed varius dictum. Suspendisse
            vel tur ismod urna nec lectus vestibulum pharetra. Pellentesque eu
            dignissim felis. dictum. Nulla facilisi. Nunc nec erat nec nunc
            tincidunt bibendum.
          </p>
          <Link to="/about">
            <button className="read-more-btn_about">Read More</button>
          </Link>
        </div>
        <div className="right-section_home">
          <div className="info-box1">
            <h3 className="s_count">400+</h3>
            <h2>Students</h2>
          </div>
          <div className="info-box2">
            <h3 className="s_count">30+</h3>
            <h2>Teachers</h2>
          </div>
          <div className="info-box3">
            <h3 className="s_count">10+</h3>
            <h2>Staff</h2>
          </div>
          <div className="images-row">
            <div className="image-box">
              <img src={images[3]} alt="Image 1" />
            </div>
            <div className="image-box">
              <img src={images[1]} alt="Image 2" />
            </div>
          </div>
        </div>
      </section>

      <section className="notice-board-section">
        <div className="notice-section">
          <NoticePage limit={3}></NoticePage>
          <div className="more-button">
            <Link to="/notice">
              <i className="fas fa-chevron-circle-right"></i> More
            </Link>
          </div>
        </div>

        <div className="important-links-section">
          <h2>গুরুত্বপূর্ণ লিঙ্কসমূহ</h2>
          <Link to="/official-website">
            <div className="link-row">
              <i className="link-icon fas fa-external-link"></i>
              শিক্ষা বোর্ড ফলাফল
            </div>
          </Link>
          <Link to="/bd-govt">
            <div className="link-row">
              <i className="link-icon fas fa-external-link"></i>
              মাধ্যমিক ও উচ্চশিক্ষা বোর্ড
            </div>
          </Link>
          <Link to="/bd-educational-board">
            <div className="link-row">
              <i className="link-icon fas fa-external-link"></i>
              মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর
            </div>
          </Link>
          <Link to="/bd-statistical-bureau">
            <div className="link-row">
              <i className="link-icon fas fa-external-link"></i>
              বাংলাদেশ পরিসংখ্যান ব্যুরো
            </div>
          </Link>
          <Link to="/education-ministry">
            <div className="link-row">
              <i className="link-icon fas fa-external-link"></i>
              শিক্ষা মন্ত্রণালয়
            </div>
          </Link>
          <Link to="/primary-and-mass-education-ministry">
            <div className="link-row">
              <i className="link-icon fas fa-external-link"></i>
              প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়
            </div>
          </Link>
          <Link to="/secondary-and-higher-education-division">
            <div className="link-row">
              <i className="link-icon fas fa-external-link"></i>
              মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ
            </div>
          </Link>
        </div>
      </section>
      <div className="latest_news_update">
        <News limit={3}></News>
      </div>

      <div className="achievement_sec">
        <Achievement limit={5}></Achievement>

        <div className="triangle top-left-triangle"></div>
        <div className="triangle top-right-triangle"></div>
        <div className="triangle bottom-left-triangle"></div>
        <div className="triangle bottom-right-triangle"></div>
      </div>

      <BoardResult></BoardResult>

      <section className="admission-open-section">
        <div className="admission-images">
          <img src={img12} alt="Academic Cap" />
        </div>
        <div className="admission-content">
          <h2>Admissions Open</h2>
          <p>Apply now to secure your child's future!</p>
          <Link to="/admission/applynow">
            <button className="apply-btn">Apply Now</button>
          </Link>
        </div>
        <div className="admission-images">
          <img src={img13} alt="Academic Cap" />
        </div>
      </section>

      <section className="start-section">
        <div className="address-box">
          <h3>Address of CA</h3>
          <p>
            Address: 123 Main Street, City
            <br />
            Email: info@example.com
            <br />
            Phone: (123) 456-7890
          </p>
        </div>
        <div className="map-box">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.4802432638007!2d90.69218997410383!3d23.334609604613995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754f9d330fd8a49%3A0xea83d74992a0fceb!2sKFT%20COLLEGIATE%20SCHOOL!5e0!3m2!1sen!2sbd!4v1689911581948!5m2!1sen!2sbd"
            width="100%"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
