import React from "react";
import "./SecoundHeader.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";

const SecoundHeader = (props) => {
  
  return (
    <div className="row">
      <div className="col-12 header-section p-0">
        <div className="filter-img">
          <h2>{props.name}</h2>
          <span > <Link className="mai" to="/"> Home  </Link>/ {props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SecoundHeader;
