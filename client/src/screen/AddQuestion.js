import React from "react";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from "react-floating-label-input";

function AddQuestion() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            id="example-3"
            label="Add Subject Name"
            onBlur={action("onBlur")}
            onChange={action("onChange")}
            onFocus={action("onFocus")}
            value={value}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddQuestion;
