import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";  // un comment when you need
import { Link } from "react-router-dom";
import { Form, ListGroup } from "react-bootstrap";
import FormContainer from "../component/FormContainer";
import { fetchSubjects } from "../action/subject";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

const NewExamination = () => {
  const [selectedId, setSelectedId] = useState({});

  // dispatch constructor
  const dispatch = useDispatch();

  // grabs subject from database when view loads
  useEffect(() => {
    dispatch(fetchSubjects());
  }, [0]);

  // grab subject list from redux state
  const getSubject = useSelector((state) => state.getSubject);
  const { subject: subj } = getSubject;

  // loop over the subjects list from redux and set to options
  let options;
  if (subj) {
    options = subj.map((option) => ({
      value: option.name,
      label: option.name,
      _id: option._id,
    }));
  }

  // un comment when you need to use
  // const studentLogin = useSelector((state) => state.studentLogin);
  // const { studentInfo } = studentLogin;

  const setValueToState = (selectedId) => {
    return setSelectedId(selectedId);
  };

  return (
    <FormContainer>
      <p className="lead mt-5">
        Click on the select box below, to select any subject
      </p>

      <div className="d-grid gap-2 mb-5">
        <Form>
          <Select
            options={options}
            onChange={setValueToState}
            value={selectedId}
          />
          <div className="d-grid gap-2">
            <Link
              to={`/exam/${selectedId._id}`}
              className="btn btn-primary btn-block my-3"
            >
              Start Examination
            </Link>
          </div>
        </Form>
      </div>
      <hr />
      <div className="mt-5">
        <h3 className="text-primary text-uppercase">
          Mandatory Intructions to follow, when taking our exams
        </h3>
        <p className="lead bg-danger p-2 text-light">
          Read carefully, to avoid errors in your examination result
        </p>
        <ListGroup>
          <ListGroup.Item>
            Each examination has a fixed duration of{" "}
            <span className="text-warning"> 20minutes</span>, after 20minutes
            workspace automatically submits
          </ListGroup.Item>
          <ListGroup.Item>
            Each examination contains a minimum of 10 questions
          </ListGroup.Item>

          <ListGroup.Item>
            Options for each question are provided under every question in a
            select box field
          </ListGroup.Item>

          <ListGroup.Item className="text-warning">
            Read question carefully, and SELECT ANSWER ONLY ONCE FOR ANY
            QUESTION | If you select an answer two time for the same question,
            your choice will be deleted and you will automatically score zero,
            for that question.
          </ListGroup.Item>

          <ListGroup.Item>
            After you select an answer for a particular question, use the SCROLL
            BAR to scroll to the NEXT question | Or if you using a mouse, you
            can SCROLL DOWN with your mouse.
          </ListGroup.Item>

          <ListGroup.Item>
            After you finish your exam, click on the blue select button to
            submit | relax and let it do it work to summarize your result - cheers
          </ListGroup.Item>
        </ListGroup>
      </div>
    </FormContainer>
  );
};

export default NewExamination;
