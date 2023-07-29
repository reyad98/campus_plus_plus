import React from "react";
import "./PublicExamResult.css"; // Import the CSS file for styling

const PublicExamResult = () => {
  // Sample data for the results
  const resultData = [
    {
      year: "2022",
      exams: [
        {
          exam: "SSC",
          group: "Science",
          totalStudents: 1247,
          totalAttend: 1247,
          totalAPlus: 1183,
          totalA: 62,
          totalFail: 0,
          passPercentage: "99.84%",
        },
        {
          exam: "SSC",
          group: "Business Studies",
          totalStudents: 425,
          totalAttend: 425,
          totalAPlus: 166,
          totalA: 245,
          totalFail: 12,
          passPercentage: "99.53%",
        },
        // Add more exams as needed
      ],
    },
    {
      year: "2021",
      exams: [
        {
          exam: "HSC",
          group: "Science",
          totalStudents: 1200,
          totalAttend: 1200,
          totalAPlus: 1100,
          totalA: 70,
          totalFail: 5,
          passPercentage: "99.50%",
        },
        {
          exam: "HSC",
          group: "Business Studies",
          totalStudents: 400,
          totalAttend: 400,
          totalAPlus: 150,
          totalA: 230,
          totalFail: 10,
          passPercentage: "98.75%",
        },
        // Add more exams as needed
      ],
    },
    // Add more years' data as needed
  ];

  return (
    <div className="result-section_pb">
      <div className="result-box-container_pb">
        <h2>BOARD EXAM RESULT OF CA</h2>
        <div className="select-exam"></div>
        <table className="result-table_pb">
          <thead>
            <tr>
              <th>Year</th>
              <th>Exam</th>
              <th>Group</th>
              <th>Total Students</th>
              <th>Total Attend</th>
              <th>A+</th>
              <th>A</th>
              <th>Fail</th>
              <th>% of Pass</th>
            </tr>
          </thead>
          <tbody>
            {resultData.map((yearData) =>
              yearData.exams.map((examData, index) => (
                <tr key={index}>
                  {index === 0 && (
                    <td rowSpan={yearData.exams.length}>{yearData.year}</td>
                  )}
                  <td>{examData.exam}</td>
                  <td>{examData.group}</td>
                  <td>{examData.totalStudents}</td>
                  <td>{examData.totalAttend}</td>
                  <td>{examData.totalAPlus}</td>
                  <td>{examData.totalA}</td>
                  <td>{examData.totalFail}</td>
                  <td>{examData.passPercentage}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="image-video-container">
        <iframe
          width="300"
          height="160"
          src="https://www.youtube.com/embed/64wIYdBtWFc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="300"
          height="160"
          src="https://www.youtube.com/embed/CErq56ZJGLo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default PublicExamResult;
