import mainlogo from "./logo_1.png";
// import imgtoy from "./toys.png";
import imgcredit1 from "./card.png";
import imgcredit2 from "./contactless.png";
import imgcredit3 from "./visa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./footer.scss";
import { SlSocialFacebook,SlSocialTwitter,SlSocialInstagram,SlSocialYoutube  } from "react-icons/sl";
// import { FiLink } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <div className="Mainsection">
        <div className="sectionOne">
          <img src={mainlogo} alt="logo" />
          <div className="lists__">
           
           <ul>
             <li>
            
              <SlSocialFacebook />
             </li>
             <li>
               {" "}
             
               <SlSocialInstagram />
             </li>
             <li>
              
               <SlSocialTwitter />
             </li>
             <li>
             
              <SlSocialYoutube />
             </li>
           </ul>
         </div>

          {/* <img className="toys-logo" src={imgtoy} alt="" /> */}
        </div>
        <div className="second__">

          <div className="lists__">
            <h4>about</h4>
            <ul>
              <li>
                {" "}
              
                History
              </li>
              <li>
                {" "}
              
                Wishlist
              </li>
              <li>
                {" "}
              
                srvices
              </li>
              <li>
                {" "}
               
               
                contact
              </li>
            </ul>
          </div>
          <div className="lists__">
            <h4>contact</h4>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon className="icon__" icon={faHouse} /> No: 58 A,
                East Madison Street
              </li>
              <li>
                {" "}
                <FontAwesomeIcon className="icon__" icon={faPhone} />{" "}
                01006320824
              </li>
              <li>
                {" "}
                <FontAwesomeIcon className="icon__" icon={faClock} /> 9.00AM -
                6.00PM
              </li>
              <li>
                {" "}
                <FontAwesomeIcon className="icon__" icon={faEnvelope} />{" "}
                Barakatelsaeed@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="end-bar">
        <h6>All Right Reserved © 2023, Barakat elsaeed</h6>
        <div className="credits">
          <img src={imgcredit1} alt="" />
          <img src={imgcredit2} alt="" />
          <img src={imgcredit3} alt="" />
        </div>
      </div>
    </>
  );
}
