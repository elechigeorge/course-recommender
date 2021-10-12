import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { fetchSubjects } from "../action/subject";
import { makeQuestion } from "../action/question";
import { useSelector, useDispatch } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";

const AddQuestion = () => {
  const [selectedId, setSelectedId] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [option_one, setOptionOne] = useState("");
  const [option_two, setOptionTwo] = useState("");
  const [option_three, setOptionThree] = useState("");

  // dispatch constructor
  const dispatch = useDispatch();

  // grabs subject from database when view loads
  useEffect(() => {
    dispatch(fetchSubjects());
  }, [0]);

  // grab subject list from redux state
  const getSubject = useSelector((state) => state.getSubject);
  const { subject: subj } = getSubject;

  // grab questions creation progress list from redux state
  const createQuestion = useSelector((state) => state.createQuestion);
  const { loading, error, question: success } = createQuestion;

  // loop over the subjects list from redux and set to options
  let options;
  if (subj) {
    options = subj.map((option) => ({
      value: option.name,
      label: option.name,
      _id: option._id,
    }));
  }

  const answerOptions = [
    { value: "option_one", label: "Option One" },
    { value: "option_two", label: "Option Two" },
    { value: "option_three", label: "Option Three" },
  ];

  const submitSelectedSubject = (e) => setSelectedId(e);

  const submitSelectedAnswer = (e) => setSelectedAnswer(e.value);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      makeQuestion({
        subject: selectedId._id,
        question,
        answer: selectedAnswer,
        option_one,
        option_two,
        option_three,
      })
    );

    setQuestion("");
    setOptionOne("");
    setOptionTwo("");
    setOptionThree("");
  };

  return (
    <div className="d-grid gap-2 mb-5">
      {error && <Message variant="danger">{error}</Message>}
      {success && <Message variant="success">Question Created</Message>}
      {loading && <Loader />}
      <Form className="mb-5" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Subject</Form.Label>
          <Select options={options} onChange={submitSelectedSubject} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Question Here</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Answer Option</Form.Label>
          <Select options={answerOptions} onChange={submitSelectedAnswer} />
        </Form.Group>
        {/* option one here */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            Option One
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Option One"
                value={option_one}
                onChange={(e) => setOptionOne(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* option  two  */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            Option Two
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Option Two"
                value={option_two}
                onChange={(e) => setOptionTwo(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* option three */}
        <Row>
          <Col sm={2} md={2} lg={2}>
            Option Three
          </Col>
          <Col sm={10} md={10} lg={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Option Three"
                value={option_three}
                onChange={(e) => setOptionThree(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-grid gap-2">
          <Button variant="dark" type="submit" className="btn-block">
            Add New Question
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddQuestion;
