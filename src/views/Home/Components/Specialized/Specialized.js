import React from "react";
import PropTypes from "prop-types";

const Specialized = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 title-component text-center">
          <h2>Skill</h2>
        </div>
      </div>
      <div className="row item-spacialized justify-content-between">
        <div
          className="col-md-3 text-center card-specialized"
          style={{
            background: "url(" + process.env.PUBLIC_URL + "/image/card-1.jpg)",
          }}
        >
          <div className="wrap-card">
            <div>
              <h3>Civil Law</h3>
            </div>
            <div className="eff-skill"></div>
          </div>

          <div className="card-detail">
            <div class="card">
              <div className="bg-card-detail"></div>
              <div class="card-body">
                <h4 class="card-title">Civil Law</h4>
                <p class="card-text text-left">
                  Ad consequat laboris ea ipsum laboris anim enim labore
                  exercitation esse adipisicing dolore velit officia. Et
                  occaecat ea tempor laborum officia consectetur sint commodo
                  nisi fugiat cupidatat qui commodo ullamco. Cupidatat
                  exercitation consectetur aute do ex dolore ut ad in laborum
                  voluptate cupidatat veniam. Elit ullamco tempor laborum
                  nostrud. Et nulla consectetur ipsum labore labore dolore
                  aliquip consequat proident tempor dolore reprehenderit. Ex ea
                  occaecat reprehenderit fugiat. Fugiat irure et proident labore
                  adipisicing quis eiusmod enim labore.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-md-3 text-center card-specialized"
          style={{
            background: "url(" + process.env.PUBLIC_URL + "/image/card-2.jpg)",
          }}
        >
          <div className="wrap-card">
            <div>
              <h3>Commercial Law</h3>
            </div>
            <div className="eff-skill"></div>
          </div>

          <div className="card-detail">
            <div class="card">
              <div className="bg-card-detail"></div>
              <div class="card-body">
                <h4 class="card-title">Commercial Law</h4>
                <p class="card-text text-left">
                  Ad consequat laboris ea ipsum laboris anim enim labore
                  exercitation esse adipisicing dolore velit officia. Et
                  occaecat ea tempor laborum officia consectetur sint commodo
                  nisi fugiat cupidatat qui commodo ullamco. Cupidatat
                  exercitation consectetur aute do ex dolore ut ad in laborum
                  voluptate cupidatat veniam. Elit ullamco tempor laborum
                  nostrud. Et nulla consectetur ipsum labore labore dolore
                  aliquip consequat proident tempor dolore reprehenderit. Ex ea
                  occaecat reprehenderit fugiat. Fugiat irure et proident labore
                  adipisicing quis eiusmod enim labore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 text-center card-specialized"
          style={{
            background: "url(" + process.env.PUBLIC_URL + "/image/card-3.jpg)",
          }}
        >
          <div className="wrap-card">
            <div>
              <h3>International Law</h3>
            </div>
            <div className="eff-skill"></div>
          </div>

          <div className="card-detail">
            <div class="card">
              <div className="bg-card-detail"></div>
              <div class="card-body">
                <h4 class="card-title">International Law</h4>
                <p class="card-text text-left">
                  Ad consequat laboris ea ipsum laboris anim enim labore
                  exercitation esse adipisicing dolore velit officia. Et
                  occaecat ea tempor laborum officia consectetur sint commodo
                  nisi fugiat cupidatat qui commodo ullamco. Cupidatat
                  exercitation consectetur aute do ex dolore ut ad in laborum
                  voluptate cupidatat veniam. Elit ullamco tempor laborum
                  nostrud. Et nulla consectetur ipsum labore labore dolore
                  aliquip consequat proident tempor dolore reprehenderit. Ex ea
                  occaecat reprehenderit fugiat. Fugiat irure et proident labore
                  adipisicing quis eiusmod enim labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Specialized.propTypes = {};

export default Specialized;
