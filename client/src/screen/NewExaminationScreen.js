import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import FormContainer from "../component/FormContainer";
import Select from "react-select";

function NewExamination() {
  const options = [
    { value: "mathematics", label: "Mathematics" },
    { value: "english", label: "English Language" },
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
  ];
  const [Subject, setSubject] = useState({});
  const dispatch = useDispatch();

  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  const setValueToState = (Subject) => {
    return setSubject(Subject);
  };

  return (
    <FormContainer>
      <p className="lead mt-5">Take a new examination now</p>

      <div className="d-grid gap-2">
        <Form>
          <Select
            options={options}
            onChange={setValueToState}
            value={Subject}
          />
          <Link
            to={`/exam/${Subject.value}`}
            className="btn btn-dark btn-block my-3"
          >
            Start Examination
          </Link>
        </Form>
      </div>
    </FormContainer>
  );
}

export default NewExamination;
