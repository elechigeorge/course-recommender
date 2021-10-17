import React, { useEffect } from "react";
import { Button, Table, ListGroup } from "react-bootstrap";
import { fetchSubjects } from "../action/subject";
import { useSelector, useDispatch } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";

const ViewSubjects = () => {
  // dispatch constructor
  const dispatch = useDispatch();

  // grabs subject from database when view loads
  useEffect(() => {
    dispatch(fetchSubjects());
  }, [0]);

  // grab courses list from redux
  const getSubject = useSelector((state) => state.getSubject);
  const { loading, error, subject: subjects } = getSubject;

  return (
    <div className="mt-5">
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <div>
        <p className="lead">List of all registered subjects </p>
        <ListGroup>
          {subjects &&
            subjects.map((subject) => (
              <ListGroup.Item>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Subject Title</th>
                      <th>Required Pass Grade</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{subject.name}</th>
                      <th>{subject.grade}</th>

                      <th>
                        <Button variant="danger" disabled>
                          Delete
                        </Button>
                      </th>
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
