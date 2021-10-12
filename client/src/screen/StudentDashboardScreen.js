import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import ExamDetail from "../component/ExamDetails";

function Dashboard() {
  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  if (!studentInfo) {
    return <Redirect to="/student/login" />;
  }

  return (
    <Fragment>
      <Fragment>
        <h1 className="large text-dark">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome, Kings{" "}
          {studentInfo && studentInfo.name}
        </p>
      </Fragment>

      <Fragment>
        <p className="lead">
          Choose a subject from each section and complete the test, to qualify
          for recommendation
        </p>
      </Fragment>
      {/* categories to choose subjects from  */}
      <Fragment>
        <Link to="/new-exam">
          <Button variant="dark" onClick="/new-exam">
            Take Exam
          </Button>
        </Link>
        <Link to="/new-exam">
          <Button variant="" className="btn-outline-warning mx-2">
            Reset My Exams
          </Button>
        </Link>
      </Fragment>
      {/* MY EXAM DETAILS */}
      <Fragment>
        <h3 className="lead mt-5">Here's your exams details</h3>
        <ExamDetail exam={"f"} />
      </Fragment>
      {/* APPLY FOR RECOMMENDATION */}
      <Fragment>
        <a className="btn btn-lg btn-block btn-outline-dark">
          Apply for a course recommendation
        </a>
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
