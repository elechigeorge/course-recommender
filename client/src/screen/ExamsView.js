import React, { useState } from "react";
import { ListGroup, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const ExamsView = ({ question }) => {
  // states
  const [selectedValue, setSelectedValue] = useState({});

  const { question: singleQuestion, answer, option, subject } = question;

  // handles gradings
  const handleChange = (val) => setValue(val);
  return (
    <div>
      <ListGroup className="mt-3">
        <ListGroup.Item className="lead">{singleQuestion}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ExamsView;
