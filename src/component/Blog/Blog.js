import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <div className="bg-i"></div>
      <div className="title">
        <Container>
          <div className="border">
            <h3>Difference between authorization and authentication? </h3>
            <p>
              Authentication is verifying someone before giving access to
              website and Authorization is the process of verifying to give
              access to specific Routes of applications{" "}
            </p>
          </div>
          <div className="border">
            <h3>
              {" "}
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h3>
            <p>
              Since firebase is developed by Google and they have world best
              developer so it is secure enough and can be trusted. Other
              authentication provers are like HID, Typingdna, Prov, Okta
              ,Entrust and more.{" "}
            </p>
          </div>
          <div className="border">
            <h3>
              What other services does firebase provide other than
              authentication?
            </h3>
            <p>
              firebase has cloud service app authentication game development and
              more{" "}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog;
