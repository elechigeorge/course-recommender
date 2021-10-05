import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Select from "react-select";

const AddQuestion = () => {
  const options = [
    { value: "mathematics", label: "Mathematics" },
    { value: "english", label: "English Language" },
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
  ];
  return (
    <div className="d-grid gap-2 mb-5">
      <Form className="mb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Course Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Course Title" />
        </Form.Group>

        {/* option one here */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Expected Grade" />
            </Form.Group>
          </Col>
        </Row>
        {/* option  two  */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Expected Grade" />
            </Form.Group>
          </Col>
        </Row>
        {/* option three */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Expected Grade" />
            </Form.Group>
          </Col>
        </Row>

        {/* option fourth */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Expected Grade" />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-grid gap-2">
          <Button variant="dark" type="submit" className="btn-block">
            Add New Course
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddQuestion;
