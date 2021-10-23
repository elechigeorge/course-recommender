import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

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
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <span className="">CAREER RECO. SYSTEM</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className="justify-content-end ">
              {studentInfo || adminInfo ? (
                <Fragment>
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="You are Logged In"
                    >
                      {adminInfo && (
                        <NavDropdown.Item href="/admin/dashboard">
                          Dashboard
                        </NavDropdown.Item>
                      )}

                      {studentInfo && (
                        <NavDropdown.Item href="/student/dashboard">
                          Dashboard
                        </NavDropdown.Item>
                      )}

                      {studentInfo && (
                        <NavDropdown.Item href="/recommend">
                          Apply for Recommendation
                        </NavDropdown.Item>
                      )}
                      {adminInfo && (
                        <NavDropdown.Item href="/subjects/list">
                          View Subjects
                        </NavDropdown.Item>
                      )}

                      {adminInfo && (
                        <NavDropdown.Item href="/course/list">
                          View Courses
                        </NavDropdown.Item>
                      )}
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logoutAdmin}>
                        Sign Out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
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
