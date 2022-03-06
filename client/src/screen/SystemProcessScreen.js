import React from 'react';

import { Container, Image } from "react-bootstrap";

function SystemProcessScreen() {
  return (
    <Container>
        <div className="mb-5 pt-4" > 
            {/* <h3>Normalization Utility Func</h3> */}
            <Image
                src={require("../images/norm.png")}
                style={{
                    width: "50%",
                    height: "50%"
                }}
                ></Image>
            <br />
             <Image
                src={require("../images/_.png")}
                style={{
                    width: "50%",
                    height: "50%"
                }}
                ></Image>

            <br />
             <Image
                src={require("../images/__.png")}
                style={{
                    width: "50%",
                    height: "50%"
                }}
                ></Image>

                 <br />
             <Image
                src={require("../images/k.png")}
                style={{
                    width: "50%",
                    height: "50%"
                }}
                ></Image>
        </div>
    </Container>
  )
}

export default SystemProcessScreen;