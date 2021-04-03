import React from "react";
import PropTypes from "prop-types";

const AboutMe = (props) => {
  return (
    <section className="component">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center title-component">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 order-2 order-md-1">
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col-md-7 order-1 order-md-2">
            <div
              className="image-aboutme mb-4"
              style={{
                backgroundImage:
                  "url(" + process.env.PUBLIC_URL + "/image/2.jpg)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
