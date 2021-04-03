import React from "react";
import PropTypes from "prop-types";

const Slogun = (props) => {
  return (
    <div
      className="slogun"
      style={{ backgroundImage: "url('./image/bg-1.jpg')" }}
    >
      <div className="container" style={{ height: "100%" }}>
        <div className="row justify-content-center" style={{ height: "100%" }}>
          <div className="col-7 text-center align-self-center">
            <h3 className="title">this is slogun</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Slogun.propTypes = {};

export default Slogun;
