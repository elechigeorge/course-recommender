import React from "react";
import { Table, Container } from "react-bootstrap";

function ExamDetails({ exam, index }) {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Subject Name</th>
            <th>Score</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {console.log(exam.exams, index)}
          {exam.exams &&
            exam.exams.map((ex) => (
              <tr>
                <td>{index}</td>
                <td>{ex.subject_name.name}</td>
                <td>{ex.grade} / 5</td>
                <td>{ex.grade >= 3 ? "Great Score" : "Poor performace"}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ExamDetails;
