import React, { Fragment, useEffect } from "react";
import { Container, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestRecommendation } from "../action/recommendation";
import Message from "../component/Message";
import Loader from "../component/Loader";
import Chart from "../component/Chart";

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
      <div>
        <Loader />
      </div>

      <div>Loading your result, this might take a while please be patient</div>
    </div>
  );
};

const Analyser = () => {
  // state
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
            <h4 className="lead">
              Your recommendations result are due to your performances on{" "}
            </h4>
            {query.performance.map((perform) => (
              <span className="btn btn-xs btn-success m-2">
                {perform.subject}
              </span>
            ))}
            <Fragment className="mt-5">
              {query.resp_mean && <Chart data={query.resp_mean} />}
            </Fragment>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Analysis;
