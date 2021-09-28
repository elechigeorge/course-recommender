import React from "react";
import { Table, Container } from "react-bootstrap";

function ExamDetails() {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Subject Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>English Language</td>
            <td>72</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Biology</td>
            <td>50</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ExamDetails;
