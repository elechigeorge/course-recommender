import React from 'react';

import {Container} from "react-bootstrap"

function SystemProcessScreen() {
  return (
    <Container>
        <div className="mb-5" style={{ width: "70%"}}> 
            <h2 className="text-uppercase mt-3">Model Training Process</h2>
            <hr />
            <div className="mb-4 ">
                <h3 className="text-light bg-dark p-2"> ## Loading data</h3>
                
                <p className="lead">
                    The first step in the model training was to GET, VIEW and UNDERSTAND the data that will be required in the training process. The data is going to be used in both training and testing the model. <span className="text-primary text-underline"> The goals is to recommend courses based on performance. </span>
                </p>

                <br />
                <p className="lead">
                    The data is the result of over 150 students performance is different subjects and the course they might fit into based on their performance. 
                </p>

                <br />

                <p className="lead">
                    The data is shaped in a frame of (8,150+) - <span className="text-primary">Eight colums and 150+ rows, eight colums of SIX (6) different subjects, recommended course and the student information which could be any information to uniquely identify each student in this case was the Identification Number Assigned</span>
                </p>

                 <h3 className="text-light bg-dark p-2"> ## Data filteration and modification </h3>

                <p className="lead"> 
                    Dataset might contain unnecessary field and sometimes missing fields - thereby the dataset might need clean-up so this won't affect the whole process. 

                </p>

                <h3 className="text-light bg-dark p-2"> ## Data separation </h3>

                <p className="lead"> 
                    Split the dataset into training and testing set. Since we have enough data on the dataset we split with a ratio of 60:40 train:test  

                </p>
                <p className="lead"> 
                    also spliting of dependent and un-dependant variables into different set

                </p>

                 <h3 className="text-light bg-dark p-2"> ## Data Normalization </h3>

                <p className="lead"> 
                    The goal of normalization is to transform dataset to be on a similar scale. This sometimes improves the performance and training stability of the model

                </p>

                <h3 className="text-light bg-dark p-2"> ## Train the model </h3>

                <p className="lead"> 
                   This process involves the programmatic, algorrithmic procedures and implementations of Multi-Variant Regression, KNN, PCC ...

                </p>

                <p className="lead"> 
                   ... 

                </p>

                <h3 className="text-light bg-dark p-2"> ## Testing </h3>

                <p className="lead"> 
                   ... 

                </p>

                 <h3 className="text-light bg-dark p-2"> ## Result Analyser</h3>

                <p className="lead"> 
                   ... result sampling ...

                </p>
               
            </div>
        </div>
    </Container>
  )
}

export default SystemProcessScreen;