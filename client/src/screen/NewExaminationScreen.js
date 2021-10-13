import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";  // un comment when you need
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
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
      <p className="lead mt-5">Take a new examination now</p>

      <div className="d-grid gap-2">
        <Form>
          <Select
            options={options}
            onChange={setValueToState}
            value={selectedId}
          />
          <Link
            to={`/exam/${selectedId._id}`}
            className="btn btn-dark btn-block my-3"
          >
            Start Examination
          </Link>
        </Form>
      </div>
    </FormContainer>
  );
};

export default NewExamination;
