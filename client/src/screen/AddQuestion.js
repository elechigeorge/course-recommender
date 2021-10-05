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

  const answerOptions = [
    { value: "option-one", label: "Option One" },
    { value: "option-two", label: "Option Two" },
    { value: "option-three", label: "Option Three" },
  ];
  return (
    <div className="d-grid gap-2 mb-5">
      <Form className="mb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Subject</Form.Label>
          <Select options={options} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Question Here</Form.Label>
          <Form.Control type="text" placeholder="Enter Question" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Answer Option</Form.Label>
          <Select options={answerOptions} />
        </Form.Group>
        {/* option one here */}
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
        {/* option  two  */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            Option Two
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Option Two" />
            </Form.Group>
          </Col>
        </Row>
        {/* option three */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            Option Three
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Option Three" />
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
};

export default AddQuestion;
