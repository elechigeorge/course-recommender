import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";
import ExamDetail from "../component/ExamDetails";
import { fetchExams } from "../action/exam";

function Dashboard() {
  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  // dispatch setup
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExams());
  }, [0]);

  // grab student exams from redux
  const studentExams = useSelector((state) => state.fetchExams);
  const { loading: examloading, error: examerror, exams } = studentExams;

  if (!studentInfo) {
    return <Redirect to="/student/login" />;
  }

  return (
    <Fragment>
      <Fragment>
        <h1 className="large text-primary text-uppercase">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome,{" "}
          {studentInfo && studentInfo.name}
        </p>
      </Fragment>
      <hr />
      <Fragment>
        <h1 className="lead text-primary text-uppercase">My Profile</h1>
        <ListGroup>
          <ListGroup.Item>
            Name |{" "}
            <span className="lead text-primary text-uppercase">
              {studentInfo && studentInfo.name}
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            Gender |{" "}
            <span className="lead text-primary text-uppercase">
              {studentInfo && studentInfo.gender}
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            Date of Birth |{" "}
            <span className="lead text-primary text-uppercase">
              {studentInfo && studentInfo.date_of_birth}
            </span>
          </ListGroup.Item>
        </ListGroup>
      </Fragment>
      <hr />
      <Fragment>
        <p className="lead text-primary text-uppercase">
          Complete a minimum of Six (6) examinations to apply for course
          recommendation
        </p>
      </Fragment>
      {/* categories to choose subjects from  */}
      <Fragment>
        <Link to="/new-exam">
          <Button variant="primary" disabled="true">
            Start Taking Examinations
          </Button>
        </Link>
      </Fragment>
      {/* MY EXAM DETAILS */}
      <hr />
      <Fragment>
        <h3 className="lead mt-5 text-primary text-uppercase">
          Your Examainations Result will display here, when they are available
        </h3>
        {exams &&
          exams.map((exam, index) => (
            <ExamDetail key={exam._id} exam={exam} index={index} />
          ))}
      </Fragment>
    </Fragment>
  );
}

export default Dashboard;
