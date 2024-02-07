import React from "react";
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
export default function Contact() {
  return (
    <>
     <div className="header__">
        <SecoundHeader name="Contact" />
      </div>
      <div className="main-contact ">
        <div className="one__">
          <div className="ico">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <h5>phone</h5>
          <span>
            01006320824
            <br /> 00-123-4567
          </span>
        </div>

        <div className="one__">
          <div className="ico">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <h5>Email</h5>
          <span>
            barakatelsaeed69@gmail
            <br />
            barakat-support@gmail
          </span>
        </div>

        <div className="one__">
          <div className="ico">
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
          <h5>Address</h5>
          <span>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</span>
        </div>
      </div>
      <div className="contant_form container">
        <form>
          <h4>contact form</h4>
          <input type="text" id="name" placeholder="Name" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="text" id="phone" placeholder="phone No" required />
          <textarea
            id="message"
            rows="4"
            placeholder="How can we help you ?"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
