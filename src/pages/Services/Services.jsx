import React from "react";
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
import "./Services.scss";
import img1 from "./ser-1 (1).webp";
import img2 from "./Serv-new-01.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faLaptop,
  faPenToSquare,
  faLanguage,
  faChildReaching,
  faGift,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="servies-card page-content">
      <SecoundHeader name= "services" />
      <div className="row sceond-section">
        <div className="col-6">
          <img src={img1} alt="" className="img-cont" />
        </div>
        <div className="col-6 contant-ser">
          <h1>The Finest Toys</h1>
          <p>
            Proin sed libero enim faucibus turpis, amet facilisis magna etiam
            tempore. Porttitor massa id neque aliquam vestibulum morbis, cras
            sed felis eget velit aliquet sagittis id consectetur purus pharetra
            magna placerate.
          </p>
          <div>
            <div className="list">
              <ul>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    className="circle-icon"
                    icon={faCircleDot}
                  />{" "}
                  Creative toys
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    className="circle-icon"
                    icon={faCircleDot}
                  />{" "}
                  Electronic toys
                </li>
              </ul>

              <ul>
                <li>
                  <FontAwesomeIcon className="circle-icon" icon={faCircleDot} />{" "}
                  Educational toys
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    className="circle-icon"
                    icon={faCircleDot}
                  />{" "}
                  Construction toys
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="learn-fun">
        <h2>Learn with Fun</h2>

        <div className="Big-div col-12 ">
          <div className=" col-6 small__div">
            <h3>
              <FontAwesomeIcon className="icon-ser" icon={faLaptop} /> Expert &
              kids approved
            </h3>
            <p>
              Enim tortor at auctor urna nunc id. Turpis massa sed elementum
              tempus egestas sed sed risus pretium. Cursus sit amet dictum sit
              amet justo donec enim diam. Sed turpis tincidunt id aliquet risus
              feugiat in. Blandit aliquam etiam erat velit scelerisque in.
            </p>
          </div>
          <div className=" col-6 small__div ">
            <h3>
              <FontAwesomeIcon className="icon-ser" icon={faPenToSquare} /> Lab
              tested kids toys
            </h3>
            <p>
              Viverra nam libero justo laoreet sit amet cursus sit. Quam
              pellentesque nec nam aliquam sem et tortor. Sed risus ultricies
              tristique nulla aliquet enim tortor. Egestas congue quisque
              egestas diam in arcu. Risus sed vulputate odio ut enim. Ultrices
              tincidunt arcu non sodales. Volutpat lacus laoreet non.
            </p>
          </div>
        </div>
      </div>
      <div className="main__">
        <div className="col-8 contant-ser">
          <div className="head__text">
            <h1>Our Services</h1>
            <p>
              Amet purus gravida quis blandit turpis cursus in hac habitasse. At
              augue eget arcu dictum varius duis at consectetur. Nulla malesuada
              pellentesque elit eget gravida cum sociis natoque. Turpis egestas
              sed tempus urna et pharetra pharetra massa massa. Tempus quam
              pellentesque nec nam aliquam sem. Odio euismod lacinia at quis
              risus.
            </p>
          </div>
          <div className="fourdivs row">
            <div className="col-6 our">
              <div>
                <h5>
                  {" "}
                  <FontAwesomeIcon className="icon-ser" icon={faLanguage} />
                  Manufacturing
                </h5>
                <p>
                  Pretium fusce id velit ut tortor pretium viverra suspendisse.
                  Facilisis gravida neque convallis sit enatiae cras sed fels
                  eget.
                </p>
              </div>
            </div>
            <div className="col-6 our ">
              <div>
                <h5>
                  {" "}
                  <FontAwesomeIcon
                    className="icon-ser"
                    icon={faChildReaching}
                  />{" "}
                  Excellent Customer Service
                </h5>
                <p>
                  Nec sagittis aliquam malesuada bibendum. Aliquet porttitor
                  lacus luctus accumsan tortor posuere ac. Nunc id cursus.
                </p>
              </div>
            </div>
            <div className="col-6 our ">
              <div>
                <h5>
                  {" "}
                  <FontAwesomeIcon className="icon-ser" icon={faGift} /> Online
                  Store
                </h5>
                <p>
                  Mauris pellentesque pulvinar pellentesque habitant morbi
                  tristique senectus et netus. Dui id ornare arcu odio ut sem
                  nullae.
                </p>
              </div>
            </div>
            <div className="col-6 our">
              <div>
                <h5>
                  <FontAwesomeIcon className="icon-ser" icon={faLightbulb} />{" "}
                  Global Store
                </h5>
                <p>
                  In aliquam sem fringilla ut morbi tincidunt. Magna ac placerat
                  vestibulum lectus mauris ultrices eros. Duis tristique
                  sollicite
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 img__">
          <img src={img2} alt="" className="img-cont" />
        </div>
      </div>
    </div>
  );
};

export default Services;
<FontAwesomeIcon icon={faLightbulb} />;
