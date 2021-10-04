import React from "react";
import { Form, Button } from "react-bootstrap";

function AddSubject() {
  return (
    <div className="d-grid gap-2">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Enter Subject Name</Form.Label>
          <Form.Control type="text" placeholder="Subject Name" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="dark" className="btn-block">
            Submit New Subject
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddSubject;
