import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";
import FormContainer from "../component/FormContainer";
import { login } from "../action/admin";

const AdminLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (adminInfo) {
    return <Redirect to="/admin/dashboard" />;
  }

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
        <h1 class="text-center">Admin Login</h1>
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
              type="email"
              placeholder="Enter email"
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

          <Button type="submit" variant="dark" className="btn-block mt-3">
            Login
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Not registered ? <Link to={"/admin/register"}>Register</Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default AdminLoginScreen;
