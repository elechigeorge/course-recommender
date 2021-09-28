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
      <h1 className="large text-dark">Admin Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {adminInfo && adminInfo.name}
      </p>
      <Fragment></Fragment>
    </Fragment>
  );
}

export default Dashboard;
