import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AddCourse() {
  return (
    <div className="d-grid gap-2 mb-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Course Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Course Title" />
        </Form.Group>
        <p className="lead">Add Subject Requirement </p>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Select Subject</Form.Label>
              <select id="custom-select">
                <option>Select Subject</option>
                <option value="english">English Language</option>
                <option value="mathematics">Mathematics</option>
                <option value="literature">Literature</option>
              </select>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Required Score to Pass</Form.Label>
              <Form.Control type="text" placeholder="Enter Grade " />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="dark" type="submit">
          Register Changes
        </Button>
      </Form>
    </div>
  );
}

export default AddCourse;
