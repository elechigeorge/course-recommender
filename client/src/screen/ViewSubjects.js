import React, { useEffect } from "react";
import { Button, Table, ListGroup } from "react-bootstrap";
import { fetchSubjects, removeSubject } from "../action/subject";
import { useSelector, useDispatch } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";

const ViewSubjects = () => {
  // dispatch constructor
  const dispatch = useDispatch();

  // grabs subject from database when view loads
  useEffect(() => {
    dispatch(fetchSubjects());
  }, [0, removeSubject]);

  // grab courses list from redux
  const getSubject = useSelector((state) => state.getSubject);
  const { loading, error, subject: subjects } = getSubject;

  // grab courses list from redux
  const deleteSubject = useSelector((state) => state.deleteSubject);
  const { loading: dloading } = deleteSubject;


 const delCourse = (e) => {

   dispatch(removeSubject(e.target.id));

 }


  return (
    <div className="mt-5">
      {loading && <Loader />}
      {dloading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <div>
        <p className="lead">List of all registered subjects </p>
        <ListGroup>
          {subjects &&
            subjects.map((subject) => (
              <ListGroup.Item key={subject._id}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Subject Title</th>
                      <th>Required Pass Grade</th>
                      <th>Action </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{subject.name}</th>
                      <th>{subject.grade}</th>
                      <th><Button className="btn btn-sm btn-danger" id={subject["_id"]} onClick={delCourse} > Remove </Button></th>
                     
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

export default ViewSubjects;
