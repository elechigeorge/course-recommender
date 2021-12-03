import React, { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getTestData } from "../action/profile";
import Message from "../component/Message";
import Loader from "../component/Loader";

function StudentProfileList() {
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const getAllStudent = useSelector((state) => state.getTestStudent);
  const { testdata, error, loading } = getAllStudent;

  if (!adminInfo) {
    window.alert("Hello, you have to login to access this view ");
    return <Redirect to="/admin/login" />;
  }

  useEffect(() => {
    dispatch(getTestData());
  }, [0]);

  return (
    <div className="mt-5">
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <div>
          {testdata ? <p className="lead display-2 text-uppercase text-primary">All Test Data</p> : <p className="lead display-4">Not Result</p>}
        {testdata && testdata.art.map(data => (
            <div key={data.REG_NO}>
                <ListGroup className="my-2">
                    <ListGroup.Item className="p-2">
                        <span className="text-uppercase text-primary px-2">Name:</span> {data.NAME}
                        <br />
                        <span className="text-uppercase text-primary px-2">Reg No:</span> {data.REG_NO}
                        <br />
                        <span className="text-uppercase text-primary px-2">State of Origin:</span> {data["State of Origin"]}
                        <br />
                        <span className="text-uppercase text-primary px-2">Date of Birth:</span> {data["D.O.B"]}
                        <br />
                        <span className="text-uppercase text-primary px-2">Gender:</span> {data["GENDER"]}
                        <p>exams taken</p>
                        Math: {data.MATH ? data.MATH / 10 : "null"}
                        <br />
                        English: {data.ENG ? data.ENG / 10 : "null"}
                        <br />
                        History: {data.HIS ? data.HIS / 10 : "null"}
                        <br />
                        Civic Education: {data.CV ? data.CV / 10 : "null"}
                        <br />
                        Government: {data.GOVT ? data.GOVT / 10 : "null"}
                        <br />
                        CRK: {data.CRK ? data.CRK / 10 : "null"}

                    </ListGroup.Item>
                </ListGroup>
            </div>
        ))}

{testdata && testdata.science.map(data => (
            <div key={data.REG_NO}>
                <ListGroup className="my-2">
                    <ListGroup.Item className="p-2">
                        <span className="text-uppercase text-primary px-2">Name:</span> {data.NAME}
                        <br />
                        <span className="text-uppercase text-primary px-2">Reg No:</span> {data.REG_NO}
                        <br />
                        <span className="text-uppercase text-primary px-2">State of Origin:</span> {data["State of Origin"]}
                        <br />
                        <span className="text-uppercase text-primary px-2">Date of Birth:</span> {data["D.O.B"]}
                        <br />
                        <span className="text-uppercase text-primary px-2">Gender:</span> {data["GENDER"]}
                        <p>exams taken</p>
                        Math: {data.MATH ? data.MATH / 10 : "null"}
                        <br />
                        English: {data.ENG ? data.ENG / 10 : "null"}
                        <br />
                        Physics: {data.PHYSICS ? data.PHYSICS / 10 : "null"}
                        <br />
                        Agric Science: {data.AGRICULTURAL ? data.AGRICULTURAL / 10 : "null"}
                        <br />
                        Biology: {data.BIOLOGY ? data.BIOLOGY / 10 : "null"}
                        <br />
                        Chemistry: {data.CHEMISTRY ? data.CHEMISTRY / 10 : "null"}

                    </ListGroup.Item>
                </ListGroup>
            </div>
        ))}
      </div>
    </div>
  );
}

export default StudentProfileList;
