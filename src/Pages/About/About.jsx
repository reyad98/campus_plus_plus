import React from "react";
import img1 from "../images/img4.jpg";
import "./About.css"; // Add your CSS file for styling
const About = () => {
  const admissionData = [
    {
      id: 1,
      group: "Science",
      version: "Bangla",
      shift: "Day",
      minimumGPA: 4.0,
      totalSeat: 350,
    },
    {
      id: 2,
      group: "Commerce",
      version: "English",
      shift: "Morning",
      minimumGPA: 3.5,
      totalSeat: 200,
    },
    {
      id: 3,
      group: "Arts",
      version: "English",
      shift: "Morning",
      minimumGPA: 3.0,
      totalSeat: 200,
    },
    // Add more data as needed
  ];
  return (
    <div className="about-section">
      <h2>About Our College</h2>
      <p>
        Welcome to our esteemed college! We are a premier educational
        institution committed to providing top-notch education and fostering the
        holistic development of our students.
      </p>

      <div className="college-info">
        <div className="info-item">
          <h3>EIIN Number</h3>
          <p>123456</p>
        </div>
        <div className="info-item">
          <h3>Version</h3>
          <p>Bangla</p>
        </div>
        <div className="info-item">
          <h3>Shift</h3>
          <p>Day Shift</p>
        </div>
        <div className="info-item">
          <h3>Date of Establishment</h3>
          <p>January 1, 1980</p>
        </div>

        <div className="info-item">
          <h3>Date of Publication</h3>
          <p>September 15, 2023</p>
        </div>
      </div>

      <div class="history-section">
        <div class="history-image">
          <img src={img1} alt="College History" />
        </div>
        <div class="history-content">
          <h2>History of Kashmir Kanyakumari College</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor nunc sit amet purus feugiat, sit amet fermentum nunc
            tincidunt. Donec vel libero euismod, pellentesque erat in, varius
            odio. Suspendisse potenti. Fusce tristique quam vel quam venenatis
            ullamcorper. Sed sit amet diam ac quam dignissim tempor. Fusce
            feugiat venenatis orci eu pharetra. tor nunc sit amet purus feugiat,
            sit amet fermentum nunc tincidunt. Donec vel libero euismod,
            pellentesque erat in, varius odio. Suspendisse potenti. Fusce
            tristique quam vel quam venenatis ullamcorper. Sed sit amet diam ac
            quam dignissim tempor. Fusce feugiat venenatis orci eu pharetra.
          </p>
        </div>
      </div>

      <div class="department-section">
        <div class="department-name">
          <h2>Department</h2>
        </div>
        <div className="vertical_bar_dep"></div>

        <div class="department-list">
          <ul>
            <li>
              <span>Science</span>
            </li>
            <li>
              <span>Commerce</span>
            </li>
            <li>
              <span>Arts</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="department-section infra">
        <div class="department-name">
          <h2>InFrastractor </h2>
        </div>
        <div className="vertical_bar"></div>
        <div class="department-list">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            praesentium error quia amet ad omnis veritatis a dolorem quam
            labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Odio praesentium error quia amet ad omnis veritatis a dolorem quam
            labore.
          </p>
        </div>
      </div>

      <div class="department-section lab">
        <div class="department-name">
          <h2>Lab Fasalities</h2>
        </div>
        <div className="vertical_bar_lab"></div>

        <div class="department-list">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            praesentium error quia amet ad omnis veritatis a dolorem quam
            labore.
          </p>
        </div>
      </div>

      <div className="admission-criteria">
        <h2>Admission Criteria</h2>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Group</th>
              <th>Version</th>
              <th>Shift</th>
              <th>Minimum GPA</th>
              <th>Total Seat</th>
            </tr>
          </thead>
          <tbody>
            {admissionData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.group}</td>
                <td>{data.version}</td>
                <td>{data.shift}</td>
                <td>{data.minimumGPA}</td>
                <td>{data.totalSeat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
