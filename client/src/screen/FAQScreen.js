import React from "react";
import { Table } from "react-bootstrap";

function FAQScreen() {
  return (
    <div>
      <h3 className="large mt-3 text-dark lead">Frequently Asked Questions</h3>
      <hr />
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th>Questions</th>
            <th>Answers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>What Technologies is used in building this software</th>
            <td>
              Javascript is the programming language used, ontop of javascript
              we used Nodejs to develope the backend services and Reactjs to
              develop the User Interface
            </td>
          </tr>
          <tr>
            <th>What Design Pattern was used</th>
            <td>
              MVC design pattern was used to architect this software, which is
              the Model - View - Controller
            </td>
          </tr>
          <tr>
            <td>When was this software developed</td>
            <td>21st May, 2021</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default FAQScreen;
