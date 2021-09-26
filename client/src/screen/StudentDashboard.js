import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, Button, Row, Col, Tabs, Tab, Table } from "react-bootstrap";

function Dashboard() {
  const dispatch = useDispatch();

  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  return (
    <Fragment>
      <h1 className="large text-dark">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {userInfo && userInfo.name}
      </p>
      <Fragment>
        <h3>Welcome to your Dashboard, Kingsley </h3>
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
