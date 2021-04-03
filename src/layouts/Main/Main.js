import React from "react";
import PropTypes from "prop-types";
import "../../App.css";

const Main = (props) => {
  const { children } = props;
  return (
    <>
      <section
        className="image-header pb-5"
        style={{
          background: "url(" + process.env.PUBLIC_URL + "/image/1.jpg)",
        }}
      >
        <nav
          id="navbar"
          className="navbar sticky-top navbar-expand-lg navbar-light"
        >
          {/* <a className="navbar-brand" href="#">
            Nguyễn Thị Kim Nguyệt
          </a> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <div
            className="collapse navbar-collapse menu-padding collapse show"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item active-menu">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                  <div className="line"></div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                  <div className="line"></div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                  <div className="line"></div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row title-header align-items-center">
            <div className="col-md-7">
              <h1 className="mb-2">Nguyễn Thị Kim Nguyệt</h1>
              <h2 className="mb-5">Law values ​​justice</h2>
              <button type="button" className="btn btn-success ">
                View CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="mark-layout"></div>
      {children}
      <footer>
        <div className="container-fluid footer">
          <div className="row">
            {/* footer-left */}
            <div className="col-12 col-lg-6 ">
              <div className="row">
                <div className="col-12 col-sm-6 ">
                  <div
                    className="avatar"
                    style={{
                      backgroundImage:
                        "url(" + process.env.PUBLIC_URL + "/image/avatar1.jpg)",
                    }}
                  ></div>
                </div>
                <div className="col-12 col-sm-6 ">
                  <div className="info-footer">
                    <h6>Name: Nguyễn Thị Kim Nguyệt</h6>
                    <h6>phone: 0902618093</h6>
                    <h6>email: kimnguyet0815@gmail.com</h6>
                    <div className="icon-contacts">
                      <span>
                        <i className="fab fa-facebook-square"></i>
                      </span>
                      <span>
                        <i className="fab fa-facebook-messenger"></i>
                      </span>
                      <span>
                        <i className="fab fa-instagram"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer-right */}
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-6">
                  <div className="func ">
                    <h4 className="mb-2 mb-md-3">This is title</h4>
                    <h6>this is contents</h6>
                    <h6>this is contents</h6>
                    <h6>this is contents</h6>
                    <h6>this is contents</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="spec">
                    <h4 className="mb-2 mb-md-3">This is title</h4>
                    <h6>this is contents</h6>
                    <h6>this is contents</h6>
                    <h6>this is contents</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black"></div>
      {/* <iframe
        src="http://docs.google.com/gview?url=http://domain.com/your_pdf.pdf&embedded=true"
        style={{ width: "600px", height: "500px" }}
        frameborder="0"
      ></iframe>
      https://docs.google.com/gview?url=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf&embedded=true
       */}
      <iframe
        className="pdf"
        src="https://www.yumpu.com/en/embed/view/P2F87uvwUdD5SOis"
        frameborder="0"
        allowfullscreen="true"
        allowtransparency="true"
        style={{ width: "100%", height: "100%" }}
      ></iframe>

      {/* <iframe src="https://www.yumpu.com/en/embed/view/P2F87uvwUdD5SOis" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe><br><a href="https://www.yumpu.com/en/document/view/65463608/nguyen-nhut-tan-2-1" title="Nguyễn nhựt tân (2) (1)" target="_blank">Nguyễn nhựt tân (2) (1)</a> */}
      <div className="closePDF text-center">Close</div>
    </>
  );
};

Main.propTypes = {};

export default Main;
