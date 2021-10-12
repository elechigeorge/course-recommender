import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import AddQuestion from "./AddQuestion";
import AddCourse from "./AddCourse";
import AddSubject from "./AddSubject";

function Dashboard() {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  if (!adminInfo) {
    return <Redirect to="/admin/login" />;
  }

  return (
    <Fragment>
      <h1 className="large text-dark">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome,{" "}
        {adminInfo && adminInfo._doc.name}
      </p>
      <div className="py-4">
        <i>
          Please add relevant courses, subject and questions for each subject
        </i>
      </div>
      <Fragment>
        <Tabs
          defaultActiveKey="subject"
          id="uncontrolled-tab-example"
          className="text-dark"
        >
          <Tab eventKey="subject" title="Add New Subject" className="text-dark">
            <p className="lead">Add New Subject</p>
            <AddSubject />
          </Tab>
          <Tab
            eventKey="question"
            title="Add New Questions"
            className="text-dark"
          >
            <p className="lead">Add New Question</p>
            <AddQuestion />
          </Tab>
          <Tab eventKey="course" title="Add New Courses" className="text-dark">
            <p className="lead">Add New Course</p>

            <AddCourse />
          </Tab>
        </Tabs>
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
