import React from "react";
import PropTypes from "prop-types";

const Prize = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 text-center title-component">
          <h2>Prize</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-5 mb-md-1">
          <div className="card-prize ">
            <div
              className="image-prize mb-2"
              style={{ backgroundImage: "url('./image/card-1.jpg')" }}
            ></div>
            <h5>this is prize</h5>
            <p>16/3/2012</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-5 mb-md-1">
          <div className="card-prize ">
            <div
              className="image-prize mb-2"
              style={{ backgroundImage: "url('./image/card-2.jpg')" }}
            ></div>
            <h5>this is prize</h5>
            <p>16/3/2012</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-5 mb-md-1">
          <div className="card-prize ">
            <div
              className="image-prize mb-2"
              style={{ backgroundImage: "url('./image/card-3.jpg')" }}
            ></div>
            <h5>this is prize</h5>
            <p>16/3/2012</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Prize.propTypes = {};

export default Prize;
