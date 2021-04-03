import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActiveMe = (props) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 text-center title-component">
          <h2>Active</h2>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className=" mb-md-1 mb-5">
            <div className="wrap-card-active">
              <div
                className="img-active mb-2 mb-sm-3"
                style={{ backgroundImage: "url('./image/card-1.jpg')" }}
              ></div>
              <h5>this is title</h5>
              <p>this is contents ascacas acacacas acacas acasca acac</p>
              <p>16/2/2020</p>
            </div>
          </div>
        </div>
        <div>
          <div className=" mb-md-1 mb-5">
            <div className="wrap-card-active">
              <div
                className="img-active mb-2 mb-sm-3"
                style={{ backgroundImage: "url('./image/card-2.jpg')" }}
              ></div>
              <h5>this is title</h5>
              <p>this is contents ascacas acacacas acacas acasca acac</p>
              <p>16/2/2020</p>
            </div>
          </div>
        </div>
        <div>
          <div className=" mb-md-1 mb-5">
            <div className="wrap-card-active">
              <div
                className="img-active mb-2 mb-sm-3"
                style={{ backgroundImage: "url('./image/card-3.jpg')" }}
              ></div>
              <h5>this is title</h5>
              <p>this is contents ascacas acacacas acacas acasca acac</p>
              <p>16/2/2020</p>
            </div>
          </div>
        </div>
        <div>
          <div className=" mb-md-1 mb-5">
            <div className="wrap-card-active">
              <div
                className="img-active mb-2 mb-sm-3"
                style={{ backgroundImage: "url('./image/card-1.jpg')" }}
              ></div>
              <h5>this is title</h5>
              <p>this is contents ascacas acacacas acacas acasca acac</p>
              <p>16/2/2020</p>
            </div>
          </div>
        </div>
        <div>
          <div className=" mb-md-1 mb-5">
            <div className="wrap-card-active">
              <div
                className="img-active mb-2 mb-sm-3"
                style={{ backgroundImage: "url('./image/card-3.jpg')" }}
              ></div>
              <h5>this is title</h5>
              <p>this is contents ascacas acacacas acacas acasca acac</p>
              <p>16/2/2020</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

ActiveMe.propTypes = {};

export default ActiveMe;
