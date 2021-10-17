import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Select from "react-select";
import "./ExamView.css";

const ExamsView = ({ question, grade, changeGrade }) => {
  // default options
  const answerOptions = [
    { value: "option_one", label: "A" },
    { value: "option_two", label: "B" },
    { value: "option_three", label: "C" },
  ];

  const {
    question: singleQuestion,
    answer,
    options: { option_one, option_two, option_three },
    subject,
  } = question;

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
      className="exam"
    >
      <div style={{ width: "90vw" }}>
        <ListGroup className="mt-3 w-4">
          <ListGroup.Item className="lead">{singleQuestion}</ListGroup.Item>
          <ListGroup.Item>A: {option_one}</ListGroup.Item>
          <ListGroup.Item>B: {option_two}</ListGroup.Item>
          <ListGroup.Item>C: {option_three}</ListGroup.Item>
          <h6>Select Answer </h6>
          <Select
            options={answerOptions}
            onChange={(e) => changeGrade(answer, e.value, subject)}
          />

          <hr />
        </ListGroup>
      </div>
    </div>
  );
};

export default ExamsView;
