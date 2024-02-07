import React from "react";
import "./Feedback.scss";
import clone from "./team-1.webp";
import cltwo from "./team-2.webp";
import clthree from "./team-3.webp";

export default function Feedback() {
  return (
    <>
      <h3 className="head">Our customers opinions</h3>
      <div className="customer-div">
        <div className="client">
          <img src={clone} alt="" />
          <span>jack</span>
          <p>
            Quam pellentesque nec nam aliquam sem et tortor. Sed risus ultricies
            tristique nulla aliquet enim tortor. Egestas congue quisque egestas
            diam in arcu.
          </p>
        </div>

        <div className="client">
          <img src={cltwo} alt="" />
          <span>marlin Doli</span>
          <p>
            Risus sed vulputate odio ut enim. Ultrices tincidunt arcu non
            sodales. Volutpat lacus laoreet non curabitur gravida arcu. Dapibus
            ultrices in iaculis nunc
          </p>
        </div>

        <div className="client">
          <img src={clthree} alt="" />
          <span>Disosa</span>
          <p>
            Tincidunt id aliquet risus feugiat. Nunc sed id semper risus. Turpis
            massa sed elementum tempus egestas sed sed risus pretium sit erentel
            dioti loe.
          </p>
        </div>
      </div>
    </>
  );
}
