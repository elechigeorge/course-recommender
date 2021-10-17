import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Message from "../component/Message";
import Loader from "../component/Loader";
import FormContainer from "../component/FormContainer";
import { login } from "../action/student";

const StudentLoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const studentLogin = useSelector((state) => state.studentLogin);
  const { loading, error, studentInfo } = studentLogin;

  if (studentInfo) {
    return <Redirect to="/student/dashboard" />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <FormContainer>
        <h1 className="text-primary text-uppercase">Welcome back | Student</h1>
        {error && (
          <Message variant="danger">
            Invalid User Data / Check you have a stable network connection
          </Message>
        )}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary" className="btn-block mt-3">
              Login
            </Button>
          </div>
        </Form>

        <Row className="py-3">
          <Col>
            Create an account ? <Link to={"/student/register"}>Register</Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default StudentLoginScreen;
