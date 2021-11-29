import React, { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Redirect } from "react-router";
import {Link, useParams} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getStudentProfile } from "../action/profile";
import Message from "../component/Message";
import Loader from "../component/Loader";

function StudentProfileList() {
  const dispatch = useDispatch();
  const {id} = useParams();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const getStudent = useSelector((state) => state.getProfile);
  const { profiles, error, loading } = getStudent;

  if (!adminInfo) {
    window.alert("Hello, you have to login to access this view ");
    return <Redirect to="/admin/login" />;
  }

  useEffect(() => {
    dispatch(getStudentProfile(id));
  }, [0]);

  return (
    <div className="mt-5">
      {loading ? <Loader /> : (
          <div>
            <Link to="/student/list" placeholder="Go back" className="p-2 bg-primary text-light mb-3" >Go back</Link>
           
           {error && <Message variant="danger">{error}</Message>}

           {profiles && profiles.length == 0 ? <p className="display-1 lead text-uppercase">This student has no profile</p> : <p className="lead text-uppercase mt-4">Examinations concluded</p>}
   
           {profiles ? profiles.map(profile => profile.exams.map(exam => (
               <span className="btn btn-sm btn-primary mx-2 " key={exam.subject_name._id}>{exam.subject_name.name}</span>
           ))) : null}
   
    
   
           {profiles && profiles.length > 0 ? (
               <div>
                <h3 className="mb-1 mt-3 lead text-uppercase">Student Bio Data</h3>
                 <p className="text-uppercase">Name: <span className="text-uppercase text-primary">{profiles[0].student.name}</span></p>
                 <p className="text-uppercase">Email: <span className="text-uppercase text-primary">{profiles[0].student.email}</span></p>
                 <p className="text-uppercase">State of Origin: <span className="text-uppercase text-primary">{profiles[0].student.state_of_origin}</span></p>
                 <p className="text-uppercase">Date of Birth: <span className="text-uppercase text-primary">{profiles[0].student.date_of_birth}</span></p>
                 <p className="text-uppercase">Gender: <span className="text-uppercase text-primary">{profiles[0].student.gender}</span></p>

                </div>
           ) : ''}

          

       </div> 
      )}
     
    </div>
  );
}

export default StudentProfileList;
