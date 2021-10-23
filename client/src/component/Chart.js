import React, { Fragment } from "react";
import { ListGroup, ProgressBar } from "react-bootstrap";

const Chart = ({ data }) => {
  return (
    <Fragment>
      <h4 className="text-uppercase">Recommendation Details</h4>
      <ListGroup>
        {data &&
          Object.entries(data).map(([key, value]) => (
            <ListGroup.Item className="h3 text-uppercase text-primary my-3">
              {key}
              <div>
                <ProgressBar
                  animated
                  now={value}
                  max="5"
                  label={`${key} has a rating recommendation of ${Math.round(
                    value * 20
                  )}%`}
                  style={{ height: "30px" }}
                />
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Fragment>
  );
};

export default Chart;
