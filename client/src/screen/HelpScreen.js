import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

function HelpScreen() {
  return (
    <div>
      <Jumbotron className="my-3">
        <h1 className="large">Help Centre</h1>
        <p className="large">Need additional help ? we have got you covered</p>
        <p>
          <i>write to us</i>
        </p>
        <Button className="btn-dark btn-outline-gray">
          help@examlab.edu.ng
        </Button>
      </Jumbotron>
    </div>
  );
}

export default HelpScreen;
