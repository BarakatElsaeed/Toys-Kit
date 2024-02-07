import React from "react";
import "./SecoundHeader.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const SecoundHeader = (props) => {
  
  return (
    <div className="row">
      <div className="col-12 header-section p-0">
        <div className="filter-img">
          <h2>{props.name}</h2>
          <span>Home / {props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SecoundHeader;
