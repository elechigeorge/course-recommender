import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import FormContainer from "../component/FormContainer";
import Select from "react-select";

function NewExamination() {
  const [Subject, setSubject] = useState("");
  const dispatch = useDispatch();

  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  const options = [
    { value: "english", label: "English Language" },
    { value: "mathematics", label: "Mathematics" },
    { value: "chemistry", label: "Chemistry" },
  ];

  return (
    <FormContainer>
      <p className="lead mt-5">Take a new examination now</p>

      <div className="d-grid gap-2">
        <Select options={options} />
        <Link to={`/exam/:subjectId`} className="btn btn-dark btn-block my-3">
          Start Examination
        </Link>
      </div>
    </FormContainer>
  );
}

export default NewExamination;
