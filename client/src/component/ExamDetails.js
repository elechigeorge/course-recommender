import React from "react";
import { Table, Container } from "react-bootstrap";

function ExamDetails({ exam, index }) {
  return (
    <Container className="mb-5">
      <Table striped bordered hover className="mb-5">
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
                <td>{index + 1}</td>
                <td>{ex.subject_name.name}</td>
                <td>{ex.grade} / 10</td>
                <td>{ex.grade >= 5 ? "Great Score" : "Poor performace"}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ExamDetails;
