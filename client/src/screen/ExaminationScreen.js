import React, { useState, useEffect } from "react";
import ExamsView from "./ExamsView";
import { fetchQuestion } from "../action/question";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";

const ExaminationScreen = () => {
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

  return (
    <div>
      {loading && <Loader />}
      {error && (
        <Message variant="warning">
          Please check your network, and reload this page
        </Message>
      )}
      {questions &&
        questions.map((question) => (
          <ExamsView question={question} key={question._id} />
        ))}
    </div>
  );
};

export default ExaminationScreen;
