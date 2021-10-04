import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import FormContainer from "../component/FormContainer";

function NewExamination() {
  const [Subject, setSubject] = useState("");
  const dispatch = useDispatch();

  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  return (
    <FormContainer>
      <p className="lead mt-5">Take a new examination now</p>

      <div className="d-grid gap-2">
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Link to={`/exam/:subjectId`} className="btn btn-dark btn-block my-3">
            Start Examination
          </Link>
        </Form>
      </div>
    </FormContainer>
  );
}

export default NewExamination;
