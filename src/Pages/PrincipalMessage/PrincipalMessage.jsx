import React from "react";
import img9 from "../images/img9.jpg"; // Replace with the actual image path
import "./PrincipalMessage.css";
const PrincipalMessage = () => {
  return (
    <div className="principal-message-container">
      <div className="image-container_principal">
        <img src={img9} alt="Principal" className="principal-image1" />
      </div>
      <p className="principal-designation">
        Colonel Babar Md. Salim, psc, MDS, MBA (Retd.)
      </p>
      <div className="message-text">
        <h2>Principal Message</h2>
        <p>
          Education at present is a misnomer and has lost its fragrance. Our
          future stakeholders and the society as a whole lack in much expected
          nature of education. Proper grooming and developing a balanced
          personality is a far cry. Students in Schools, Colleges, Universities,
          and their parents are chasing the GPA based results only, devoid of
          its utility for a healthy and better environment around. Who is at
          fault? The answer is, we all plurally are responsible for such
          degrading state of education. Our children have been slowly and
          gradually drifted away from the essence of education in real sense.
          Only bookish knowledge fails to meet up the need of a family, society,
          country, and the world in most of the cases. A small percentage of our
          students somehow are able to meet the need. However, the majority of
          them are failing to shoulder the responsibility bestowed upon him/her.
          We need to find answers to these questions and mend those to make a
          society worth living.
        </p>
        <p>
          It's needless to reiterate the importance of co-curricular and
          extra-curricular activities to make a student robust mentally and
          physically, enabling him/her to accept the challenges lying ahead.
          These activities teach the students to be self-confident, honest, and
          act as a catalyst to make a team, family, and social fraternity
          stronger. Outdoor activities in the field are rarely found even in the
          village side, let alone in the suburbs and cities. We need to create
          rooms and provide scopes for our offspring to participate in
          activities like; games & sports, debate, recitation, cultural, science
          fair, project works, etc. Teamwork is another way of instilling fellow
          feelings among our children and getting rid of selfishness. Singular
          family and social attitude are hurdles in developing a positive
          mindset. It is imperative to convert such an approach to pluralistic
          perception with a view to making our teens capable of undertaking
          higher responsibility.
        </p>
      </div>
    </div>
  );
};

export default PrincipalMessage;
