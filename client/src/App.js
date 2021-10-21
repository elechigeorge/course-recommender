import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./component/Header";

import HomeScreen from "./screen/HomeScreen";

import AboutScreen from "./screen/AboutScreen";
import FAQScreen from "./screen/FAQScreen";
import HelpScreen from "./screen/HelpScreen";
import StudentLoginScreen from "./screen/StudentLoginScreen";

import StudentRegisterScreen from "./screen/StudentRegisterScreen";

import AdminLoginScreen from "./screen/AdminLoginScreen";

import AdminRegisterScreen from "./screen/AdminRegisterScreen";
import StudentDashboardScreen from "./screen/StudentDashboardScreen";
import AdminDashboardScreen from "./screen/AdminDashboardScreen";

// school stuffs
import NewExamination from "./screen/NewExaminationScreen";
import ExaminationScreen from "./screen/ExaminationScreen";

// other views
import ViewCourses from "./screen/ViewCourses";
import ViewSubjects from "./screen/ViewSubjects";
import RecommendationView from "./screen/RecommendationView";
import Analysis from "./screen/Analysis";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="">
        <Route path="/" component={HomeScreen} exact />
        <Container>
          <Route path="/student/login" component={StudentLoginScreen} />
          <Route path="/student/register" component={StudentRegisterScreen} />

          <Route path="/admin/login" component={AdminLoginScreen} />
          <Route path="/admin/register" component={AdminRegisterScreen} />

          <Route path="/about" component={AboutScreen} />
          <Route path="/help" component={HelpScreen} />
          <Route path="/faq" component={FAQScreen} />

          <Route path="/student/dashboard" component={StudentDashboardScreen} />
          <Route path="/admin/dashboard" component={AdminDashboardScreen} />

          <Route path="/new-exam" component={NewExamination} />
          <Route path={`/exam/:subjectId`} component={ExaminationScreen} />

          <Route path="/subject/list" component={ViewSubjects} />
          <Route path="/course/list" component={ViewCourses} />

          <Route path="/recommend" component={RecommendationView} />

          <Route path="/v1/analysis" component={Analysis} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
