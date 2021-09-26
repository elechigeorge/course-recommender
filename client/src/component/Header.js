import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from "react-bootstrap";

import { logout } from "../action/student";
import { logout as log } from "../action/admin";

const Header = () => {
  const dispatch = useDispatch();

  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const logoutAdmin = () => {
    if (studentInfo) {
      dispatch(logout());
    } else {
      dispatch(log());
    }
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <span className="mx-3">EXAM LAB PRO</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {studentInfo || adminInfo ? (
                <Fragment>
                  <Nav.Link onClick={logoutAdmin}>Logout</Nav.Link>
                </Fragment>
              ) : (
                <Fragment>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/help">Help</Nav.Link>
                  <Nav.Link href="/faq">FAQ</Nav.Link>

                  <Nav.Link href="/student/login">Student</Nav.Link>
                  <Nav.Link href="/admin/login">Administrator</Nav.Link>
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
