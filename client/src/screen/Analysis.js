import React, { Fragment, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestRecommendation } from "../action/recommendation";
import Message from "../component/Message";
import Loader from "../component/Loader";

const Analysis = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRecommendation());
  }, [0]);

  // load reactive redux bloobs
  const createRecommendation = useSelector(
    (state) => state.createRecommendation
  );
  const { loading, error, query } = createRecommendation;

  return (
    <Container>
      {error && (
        <Message className="bg-danger p-2">
          {" "}
          Try refreshing this page, and check your network
        </Message>
      )}
      {loading ? <LoaderZero /> : <Analyser />}
    </Container>
  );
};

const LoaderZero = () => {
  // load reactive redux bloobs
  const createRecommendation = useSelector(
    (state) => state.createRecommendation
  );
  const { loading, error, query } = createRecommendation;
  return (
    <div
      className="lead h1 text-uppercase text-primary"
      style={{
        width: "90vw",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader />
      <div>Loading your result, this might take a while please be patient</div>
    </div>
  );
};

const Analyser = () => {
  // load reactive redux bloobs
  const createRecommendation = useSelector(
    (state) => state.createRecommendation
  );
  const { loading, error, query } = createRecommendation;
  return (
    <Fragment>
      {query && (
        <Fragment>
          <p className="h4 text-uppercase mt-5 text-primary">
            Your Analyser has brough your results ! enjoy
          </p>
          <Fragment>
            {query.performance.map((perform) => {
              <Button className="btn-sm btn-primary">{perform.subject}</Button>;
            })}
            <p className="lead"> {}</p>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Analysis;