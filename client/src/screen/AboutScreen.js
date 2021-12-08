import React from "react";

function AboutScreen() {
  return (
    <div>
      <h3 className="large mt-3 text-primary lead text-uppercase">
        About US | Course Recommendation System
      </h3>
      <hr />
      <p className=" text-uppercase" >  
        We are a course recommendations and examination platform.
      </p>
      <br />

      <p className=" text-uppercase" >  
        <span className="text-primary text-underline" style={{fontSize: "20px"}}>Key features of this system</span>
        <br />
        <br />
        <br />
      Take examination and see your performance instantly
      <br />
      <br />
      DO well in at least Six (6) combination of different subjects of your choices
      <br />
      <br />
      Apply for course recommendation, our recommendations system take your performances and recommend courses based on your performances and time taken to finish an exam and time spent in answering individual question.
      <br />
      <br />
      When our system is done, analysing it prints out career options and ranks them accordingly...
      </p>
    </div>
  );
}

export default AboutScreen;
