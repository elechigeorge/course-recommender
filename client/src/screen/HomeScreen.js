import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function HomeScreen() {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          height: "90vh",
          width: "100%",
        }}
      >
        <Col md={6} sm={12} lg={6}>
          <div>
            <Image
              src={require("../images/computer.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            ></Image>
          </div>
        </Col>
        <Col md={6} sm={12} lg={6}>
          <div className="text-center-sm">
            <h1>WELCOME TO EXAM LAP</h1>
            <p>
              Exam Lab is a machine learning examination system that recommend
              university courses to aspiring university and polytechnics student
              based on their academic performance with each subjects{" "}
            </p>
            <a href="/student/register" className="btn btn-dark btn-lg">
              Get Started
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
