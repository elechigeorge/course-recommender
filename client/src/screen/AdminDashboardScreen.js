import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, Button, Row, Col, Tabs, Tab, Table } from "react-bootstrap";

function Dashboard() {
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  return (
    <Fragment>
      <h1 className="large text-dark">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome, Professor Kadirat{" "}
        {adminInfo && adminInfo.name}
      </p>
      <div className="py-4">
        <i>
          Please add relevant courses, subject and questions for each subject
        </i>
      </div>
      <Fragment>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="text-dark"
        >
          <Tab eventKey="home" title="Add New Subject" className="text-dark">
            <p className="lead">Something is here</p>
          </Tab>
          <Tab eventKey="leave" title="Add New Questions" className="text-dark">
            question view goes here
          </Tab>
          <Tab
            eventKey="directorates"
            title="Add New Courses"
            className="text-dark"
          >
            add courses here
          </Tab>
        </Tabs>
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
