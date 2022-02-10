import React, { useEffect } from "react";
import { Button, Table, ListGroup } from "react-bootstrap";
import { fetchCourse } from "../action/course";
import { useSelector, useDispatch } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";

const ViewCourses = () => {
  // dispatch constructor
  const dispatch = useDispatch();

  // grabs subject from database when view loads
  useEffect(() => {
    dispatch(fetchCourse());
  }, [0]);

  // grab courses list from redux
  const getCourse = useSelector((state) => state.getCourse);
  const { loading, error, courses } = getCourse;
  return (
    <div className="mt-5">
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <div>
        <p className="lead">List of all registered courses </p>
        <ListGroup>
          {courses &&
            courses.map((course) => (
              <ListGroup.Item>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Course Title</th>
                      <th>First Subject</th>
                      <th>Second Subject </th>
                      <th>Third Subject</th>
                      <th>Fourth Subject </th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{course.course_name}</th>
                      <th>{course.first_subject.subject_name}</th>
                      <th>{course.second_subject.subject_name} </th>
                      <th>{course.third_subject.subject_name}</th>
                      <th>{course.fourth_subject.subject_name}</th>
                      
                    </tr>
                  </tbody>
                </Table>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default ViewCourses;
