import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { fetchSubjects } from "../action/subject";
import { makeCourse } from "../action/course";
import { useSelector, useDispatch } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";

const AddCourse = () => {
  // build state objects for selected subjects
  const [course_name, setCourseName] = useState("");
  const [first_subject, setSelectedFirstSubject] = useState({});
  const [second_subject, setSelectedSecondSubject] = useState({});
  const [third_subject, setSelectedThirdSubject] = useState({});
  const [fourth_subject, setSelectedFourthSubject] = useState({});
  const [fifth_subject, setSelectedFifthSubject] = useState({});
  const [sixth_subject, setSelectedSixthSubject] = useState({});

  // other state values
  const [first_grade, setFirstGrade] = useState("");
  const [second_grade, setSecondGrade] = useState("");
  const [third_grade, setThirdGrade] = useState("");
  const [fourth_grade, setFourthGrade] = useState("");
  const [fifth_grade, setFifthGrade] = useState("");
  const [sixth_grade, setSixthGrade] = useState("");

  // dispatch constructor
  const dispatch = useDispatch();

  // grabs subject from database when view loads
  useEffect(() => {
    dispatch(fetchSubjects());
  }, [0]);

  // grab subject list from redux state
  const getSubject = useSelector((state) => state.getSubject);
  const { subject: subj } = getSubject;

  // grab course creation progress list from redux state
  const createCourse = useSelector((state) => state.createCourse);
  const { loading, error, course: success } = createCourse;

  // loop over the subjects list from redux and set to options
  let options;
  if (subj) {
    options = subj.map((option) => ({
      value: option.name,
      label: option.name,
      _id: option._id,
    }));
  }

  const submitSelectedFirstSubject = (e) =>
    setSelectedFirstSubject({ subject_name: e.value, grade: first_grade });

  const submitSelectedSecondSubject = (e) =>
    setSelectedSecondSubject({ subject_name: e.value, grade: second_grade });

  const submitSelectedThirdSubject = (e) =>
    setSelectedThirdSubject({ subject_name: e.value, grade: third_grade });

  const submitSelectedFourthSubject = (e) =>
    setSelectedFourthSubject({ subject_name: e.value, grade: fourth_grade });

  const submitSelectedFifthSubject = (e) =>
    setSelectedFifthSubject({ subject_name: e.value, grade: fifth_grade });

  const submitSelectedSixthSubject = (e) =>
    setSelectedSixthSubject({ subject_name: e.value, grade: sixth_grade });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      makeCourse({
        course_name,
        first_subject,
        second_subject,
        third_subject,
        fourth_subject,
        fifth_subject,
        sixth_subject,
      })
    );
  };

  return (
    <div className="d-grid gap-2 mb-5">
      {error && <Message variant="danger">{error}</Message>}
      {success && <Message variant="success">Course Created</Message>}
      {loading && <Loader />}
      <p className="lead bg-primary text-light text-uppercase p-2">
        Please Add Grade, before adding subject requirement
      </p>
      <Form className="mb-5" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Course Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course Title"
            value={course_name}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </Form.Group>

        {/* option one here */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} onChange={submitSelectedFirstSubject} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Expected Grade"
                value={first_grade}
                onChange={(e) => setFirstGrade(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* option  two  */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} onChange={submitSelectedSecondSubject} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Expected Grade"
                value={second_grade}
                onChange={(e) => setSecondGrade(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* option three */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} onChange={submitSelectedThirdSubject} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Expected Grade"
                value={third_grade}
                onChange={(e) => setThirdGrade(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* option fourth */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} onChange={submitSelectedFourthSubject} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Expected Grade"
                value={fourth_grade}
                onChange={(e) => setFourthGrade(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* option five */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} onChange={submitSelectedFifthSubject} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Expected Grade"
                value={fifth_grade}
                onChange={(e) => setFifthGrade(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* option fourth */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Select options={options} onChange={submitSelectedSixthSubject} />
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Expected Grade"
                value={sixth_grade}
                onChange={(e) => setSixthGrade(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" className="btn-block">
            Add New Course
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddCourse;
