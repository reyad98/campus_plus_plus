import React from "react";
import exam from "../images/exam_edited.jpg";
import "./BoardResult.css"; // CSS for styling

const BoardResult = () => {
  return (
    <div className="board-result-page">
      <div className="background-image">
        <img src={exam} alt="" />
      </div>
      <div className="result-table">
        <h2>Board Exam Result HSC 2022</h2>
        <table>
          <thead>
            <tr>
              <th rowSpan="2">Year</th>
              <th rowSpan="2">Group</th>
              <th colSpan="6">Result</th>
              <th rowSpan="2">Fail</th>
              <th rowSpan="2">Total Pass</th>
              <th rowSpan="2">% Of Pass</th>
            </tr>
            <tr>
              <th>No. of Examinees</th>
              <th>Attend Examinees</th>
              <th>A+</th>
              <th>A</th>
              <th>A-</th>
              <th>B-D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3">2022</td>
              <td>B.Studies</td>
              <td>425</td>
              <td>425</td>
              <td>166</td>
              <td>245</td>
              <td>12</td>
              <td>0</td>
              <td>2</td>
              <td>423</td>
              <td>99.53%</td>
            </tr>
            <tr>
              <td>Humanities</td>
              <td>230</td>
              <td>230</td>
              <td>151</td>
              <td>75</td>
              <td>3</td>
              <td>0</td>
              <td>1</td>
              <td>229</td>
              <td>99.57%</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>1247</td>
              <td>1247</td>
              <td>1183</td>
              <td>62</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>1245</td>
              <td>99.84%</td>
            </tr>
            <tr>
              <td colSpan="2">Total Student</td>
              <td>1902</td>
              <td>1902</td>
              <td>1500</td>
              <td>382</td>
              <td>15</td>
              <td>0</td>
              <td>5</td>
              <td>1897</td>
              <td>99.64%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoardResult;
