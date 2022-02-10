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
                  {adminInfo && (<Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>)}

                  {studentInfo && (<Nav.Link href="/student/dashboard">Dashboard</Nav.Link>)}

                  {studentInfo && (<Nav.Link href="/recommend">Apply for Recommendation</Nav.Link>)}

                  {adminInfo && (<Nav.Link href="/subjects/list">View Subjects</Nav.Link>)}

                  {adminInfo && (<Nav.Link href="/course/list">View Courses</Nav.Link>)}

                  {adminInfo && (<Nav.Link href="/student/list">View Student Profile</Nav.Link>)}

                  


                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="You are Logged In"
                    >
                       {adminInfo && (
                        <NavDropdown.Item href="/student/view">
                          View Test Data
                        </NavDropdown.Item>
                      )}

                      {adminInfo && (
                        <NavDropdown.Item href="/system-process">
                          View System Design Process
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
