import React, { useEffect } from "react";
import { Button, Table, ListGroup } from "react-bootstrap";
import { fetchCourse, removeCourse } from "../action/course";
import { useSelector, useDispatch } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";

const ViewCourses = () => {
  // dispatch constructor
  const dispatch = useDispatch();

  // grabs subject from database when view loads
  useEffect(() => {
    dispatch(fetchCourse());
  }, [0, removeCourse]);

  // grab courses list from redux
  const getCourse = useSelector((state) => state.getCourse);
  const { loading, error, courses } = getCourse;

   // grab courses list from redux
   const deleteCourse = useSelector((state) => state.deleteCourse);
   const { loading: dloading, error: derror } = deleteCourse;


  const delCourse = (e) => {

    dispatch(removeCourse(e.target.id));

  }



  return (
    <div className="mt-5">
      {loading && <Loader />}
      {dloading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <div>
        <p className="lead">List of all registered courses </p>
        <ListGroup>
          {courses &&
            courses.map((course) => (
              <ListGroup.Item key={course._id}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Course Title</th>
                      <th>First Subject</th>
                      <th>Second Subject </th>
                      <th>Third Subject</th>
                      <th>Fourth Subject </th>
                      <th>Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{course.course_name}</th>
                      <th>{course.first_subject.subject_name}</th>
                      <th>{course.second_subject.subject_name} </th>
                      <th>{course.third_subject.subject_name}</th>
                      <th>{course.fourth_subject.subject_name}</th>
                      <th><Button className="btn btn-sm btn-danger" id={course["_id"]} onClick={delCourse} > Remove </Button></th>
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
