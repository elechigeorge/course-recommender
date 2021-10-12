import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { createSubject } from "../action/subject.js";
import Message from "../component/Message";
import Loader from "../component/Loader";

const AddSubject = () => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const dispatch = useDispatch();

  // grade subject state from redux
  const newSubject = useSelector((state) => state.createSubject);
  const { loading, error, subject } = newSubject;

  // submit new subject
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createSubject({ name, grade }));
    setGrade("");
    setName("");
  };

  return (
    <div className="d-grid gap-2">
      {error && <Message variant="danger">{error}</Message>}
      {subject && <Message variant="success">Subject Created</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Enter Subject Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter Pass Grade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit" variant="dark" className="btn-block">
            Submit New Subject
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddSubject;
