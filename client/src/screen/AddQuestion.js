import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./AddQuestion.css";

function AddQuestion() {
  return (
    <div className="d-grid gap-2">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <select id="custom-select">
            <option>Select Subject</option>
            <option value="english">English Language</option>
            <option value="mathematics">Mathematics</option>
            <option value="literature">Literature</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Question Here</Form.Label>
          <Form.Control type="text" placeholder="Enter Question" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <select id="custom-select">
            <option>Select Answer</option>
            <option value="option-one">Option One</option>
            <option value="option-two">Option Two</option>
            <option value="option-three">Option Three</option>
          </select>
        </Form.Group>
        <Row>
          <Col sm={2} md={2} lg={2}>
            Option One
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Option One" />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-grid gap-2">
          <Button variant="dark" type="submit" className="btn-block">
            Add New Question
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddQuestion;
