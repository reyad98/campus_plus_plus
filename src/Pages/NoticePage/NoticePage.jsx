// Notices.jsx
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./NoticePage.css";

const NoticePage = ({ limit }) => {
  const noticesData = [
    {
      date: "13 Jun, 2023",
      serial: 1,
      title: "খন্ডকালীন নিয়োগ বিজ্ঞপ্তি",
      department: "Office Notice",
    },
    {
      date: "13 Nov, 2022",
      serial: 2,
      title: "বিভিন্ন রুটে গাড়ী ছাড়ার সময়সূচি",
      department: "Academic Notice",
    },
    {
      date: "13 Jun, 2023",
      serial: 3,
      title: "খন্ডকালীন নিয়োগ বিজ্ঞপ্তি",
      department: "Office Notice",
    },
    {
      date: "12 july, 2023",
      serial: 4,
      title: "২০২৩ সালের আন্তঃ স্কুল ফুটবল টুর্নামেন্ট শুরু!!!",
      department: "Academic Notice",
    },
    // Add more notice data as needed
  ];

  const slicedNotices = limit ? noticesData.slice(0, limit) : noticesData;

  return (
    <div className="notices-page">
      <h2>নোটিস বোর্ড</h2>
      <table className="notices-table">
        <thead>
          <tr>
            <th>Publish Date</th>
            <th>Srl</th>
            <th>Notice Title</th>
            <th>View</th>
            <th>Download</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {slicedNotices.map((notice) => (
            <tr key={notice.serial}>
              <td>{notice.date}</td>
              <td>{notice.serial}</td>
              <td>{notice.title}</td>
              <td className="iconcolor">
                <FontAwesomeIcon icon={faEye} />
              </td>
              <td className="iconcolor">
                <FontAwesomeIcon icon={faDownload} /> Download
              </td>
              <td>{notice.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticePage;
