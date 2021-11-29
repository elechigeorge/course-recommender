import React, { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getAllStudentData } from "../action/profile";
import Message from "../component/Message";
import Loader from "../component/Loader";

function StudentProfileList() {
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const getAllStudent = useSelector((state) => state.getAllStudents);
  const { students, error, loading } = getAllStudent;

  if (!adminInfo) {
    window.alert("Hello, you have to login to access this view ");
    return <Redirect to="/admin/login" />;
  }

  useEffect(() => {
    dispatch(getAllStudentData());
  }, [0]);

  return (
    <div className="mt-5">
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <div>
        {students && <p className="lead">List of all registered students <span className="text-primary">in total of {students.length}</span></p>}
        <ListGroup>
          {students &&
            students.map((student) => 
                <ListGroup.Item>
                    Name: {student.name}
                    <br />
                    Identification Number: {student._id}
                    <br />
                    <Button href={`/student/profile/${student._id}`} className="btn btn-sm btn-primary text-uppercase">View complete profile</Button>
                </ListGroup.Item>)}
        </ListGroup>
      </div>
    </div>
  );
}

export default StudentProfileList;
