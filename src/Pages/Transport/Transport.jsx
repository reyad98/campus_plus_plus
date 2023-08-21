import React from "react";
import trans2 from "../images/trans2.jpg";
import trans3 from "../images/trans3.jpg";
import trans4 from "../images/trans4.jpg";
import "./Transport.css"; // You can define your own styles in a CSS file
const routesData = [
  {
    id: 1,
    name: "Route No 1",
    image: trans2, // Replace with actual image path
    start: "Start A",
    end: "Campus",
    description: "A scenic route with multiple stops along the way.",
    schedule: "Departure: 8:00 AM, Arrival: 9:00 AM",
    stops: ["Stop A", "Stop B", "Stop C"],
  },
  {
    id: 2,
    name: "Route No 2",
    image: trans3, // Replace with actual image path
    start: "Start A",
    end: "Campus",
    description: "A scenic route with multiple stops along the way.",
    schedule: "Departure: 8:00 AM, Arrival: 9:00 AM",
    stops: ["Stop A", "Stop B", "Stop C"],
  },
  {
    id: 2,
    name: "Route No 3",
    image: trans4, // Replace with actual image path
    start: "Start A",
    end: "Campus",
    description: "A scenic route with multiple stops along the way.",
    schedule: "Departure: 8:00 AM, Arrival: 9:00 AM",
    stops: ["Stop A", "Stop B", "Stop C"],
  },
  // Define other routes similarly
];

const Transport = () => {
  return (
    <div className="transport-section">
      <h2 className="section-title">TRANSPORT SERVICE</h2>
      <div className="route-cards">
        {routesData.map((route) => (
          <div key={route.id} className="route-card">
            <img src={route.image} alt={route.name} className="route-image" />
            <h3 className="route-name">{route.name}</h3>
            <p className="route-start-end">
              {route.start} to {route.end}
            </p>
            <p className="route-description">{route.description}</p>
            <div className="route-stops">
              <p>
                <strong>Stops:</strong>
              </p>
              <ul>
                {route.stops.map((stop, index) => (
                  <li key={index}>{stop}</li>
                ))}
              </ul>
            </div>
            <button className="details-button">View Details</button>
            <div className="route-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;
