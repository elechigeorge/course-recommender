import React, { useState, useEffect } from "react";
import ExamsView from "./ExamsView";
import { fetchQuestion } from "../action/question";
import { registerExam } from "../action/exam";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";

const ExaminationScreen = () => {
  const [grade, setGrade] = useState(0);
  const [subject_name, setSubjectName] = useState(1);

  // grab params from URI
  const { subjectId } = useParams();

  // extra import
  const dispatch = useDispatch();

  // grab questions from server when page loads
  useEffect(() => {
    dispatch(fetchQuestion(subjectId));
  }, [0]);

  // grab questions from redux state
  const getQuestion = useSelector((state) => state.getQuestion);
  const { loading, error, questions } = getQuestion;

  // grab exams registration process from redux state
  const registerexam = useSelector((state) => state.registerExam);
  const { loading: examloading, error: examerror, exam } = registerexam;

  // state updater
  const increase = (answer, selected, subject) => {
    if (answer === selected) {
      setGrade(...grade, grade + 1);
      setSubjectName(subject);
      console.log(grade);
    } else {
      console.log("You picked wrongly");
    }
  };

  // submit exam handler
  const registerHandler = () =>
    dispatch(
      registerExam({
        subject_name: subject_name,
        grade: grade,
      })
    );

  const whenToStart = () => {
    if (questions) {
      return;
    }
  };

  // scroll implementation
  const renderer = ({ hours, minutes, seconds }) => (
    <span className="lead text-uppercase">
      Timer | {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
  return (
    <div>
      {loading && <Loader />}
      {error && (
        <Message variant="warning">
          Please check your network, and reload this page
        </Message>
      )}
      {exam && <Redirect to="/student/dashboard" />}

      {questions &&
        questions.map((question) => (
          <div>
            <Countdown
              date={Date.now() + 1200000}
              intervalDelay={1000}
              precision={3}
              renderer={renderer}
              onComplete={registerHandler}
              onStart={whenToStart}
            />
            <ExamsView
              changeGrade={increase}
              grade={grade}
              question={question}
              renderer={renderer}
              key={question._id}
            />
          </div>
        ))}

      <div className="d-grid gap-2 mb-5">
        <Button
          variant="primary"
          className="btn-block btn-md mb-5"
          onClick={registerHandler}
        >
          {examloading ? "Submit result..." : "Submit Examination"}
        </Button>
      </div>
    </div>
  );
};

export default ExaminationScreen;
