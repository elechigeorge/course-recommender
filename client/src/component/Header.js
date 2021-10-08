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
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <span className="">EXAM LAB PRO</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className="justify-content-end ">
              {studentInfo || adminInfo ? (
                <Fragment>
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Signed In"
                    >
                      {adminInfo._doc.isAdmin && (
                        <NavDropdown.Item href="#action/3.1">
                          View Questions
                        </NavDropdown.Item>
                      )}

                      <NavDropdown.Item href="#action/3.2">
                        View Subjects
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        View Courses
                      </NavDropdown.Item>
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
