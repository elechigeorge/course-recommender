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
        </Container>
      </main>
    </Router>
  );
};

export default App;
