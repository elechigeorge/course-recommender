import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";
import FormContainer from "../component/FormContainer";
import { register } from "../action/student";

const StudentRegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [state_of_origin, setStateOfOrigin] = useState("");

  const dispatch = useDispatch();

  const studentRegister = useSelector((state) => state.studentRegister);
  const { loading, error, studentInfo } = studentRegister;

  if (studentInfo) {
    return <Redirect to="/student/dashboard" />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "" && name !== "" && password !== "" && date_of_birth !== "" && gender !== "" && state_of_origin !== "") {
      dispatch(
        register(name, email, password, date_of_birth, gender, state_of_origin)
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        marginTop: "20px",
      }}
    >
      <FormContainer>
        <h1 className="text-primary text-uppercase mt-5">
          Student | Register an account
        </h1>

        {loading && <Loader />}
        {error && (
          <Message variant="danger">
            Error: check your credentials again and confirm you have a working
            internet
          </Message>
        )}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="gender">
            <Form.Label>Gender </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="date of birth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date of Birth"
              value={date_of_birth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="state of origin">
            <Form.Label>State Of Origin</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your State of Origin"
              value={state_of_origin}
              onChange={(e) => setStateOfOrigin(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter secure passcode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary" className="btn-block mt-3">
              Register
            </Button>
          </div>
        </Form>

        <Row className="py-3">
          <Col>
            Have an account ? <Link to={"/student/login"}>Login</Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default StudentRegisterScreen;
