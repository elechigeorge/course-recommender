import React, { Fragment, useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchExams } from "../action/exam";
import ExamDetail from "../component/ExamDetails";
import Loader from "../component/Loader";

const RecommendationView = () => {
  // dispatch setup
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExams());
  }, [0]);

  // grab student exams from redux
  const studentExams = useSelector((state) => state.fetchExams);
  const { loading: examloading, error: examerror, exams } = studentExams;

  return (
    <div className="mt-3">
      <h2 className="text-primary text-uppercase">
        Apply for Course Recommendation{" "}
      </h2>
      <hr />
      <Fragment>
        <h4 className="h4 text-uppercase text-primary mt-3">Requirements</h4>

        <ListGroup>
          <ListGroup.Item>Complete 6 examinations</ListGroup.Item>
          <ListGroup.Item>
            Get a good grade in your selected subjects of choice
          </ListGroup.Item>
          <ListGroup.Item>
            Pass the required grade for the subjects of choice{" "}
          </ListGroup.Item>
          <ListGroup.Item className="bg-primary text-light text-uppercase">
            You are good to go
          </ListGroup.Item>
        </ListGroup>
      </Fragment>
      <hr />
      <Fragment>
        <h4 className="h4 text-uppercase text-primary mt-5">
          Your completed examinations and grades will appear here
        </h4>
        {examloading && <Loader />}
        {exams &&
          exams.map((exam, index) => (
            <ExamDetail key={exam._id} exam={exam} index={index} />
          ))}
      </Fragment>
      <hr />
      <Fragment>
        {exams && (
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="btn-lg btn-block"
              disabled={exams.length < 6 ? true : false}
            >
              Recommend me a course now
            </Button>
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default RecommendationView;
