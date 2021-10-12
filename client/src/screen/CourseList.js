import React from "react";
import { Table, Button } from "react-bootstrap";

function CourseList(course) {
  return (
    <div>
      <p className="lead">{course.course_name} </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>First Subject</th>
            <th>Second Subject </th>
            <th>Third Subject</th>
            <th>Fourth Subject </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{course.course_name}</th>
            <th>{course.first_subject.course_name}</th>
            <th>{course.second_subject.course_name} </th>
            <th>{course.third_subject.course_name}</th>
            <th>{course.fourth_subject.course_name}</th>
            <th>
              <Button variant="danger">Delete</Button>
            </th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CourseList;
