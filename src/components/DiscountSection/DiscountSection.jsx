import React, { useState } from "react";
import "./DiscountSection.scss";
import Countdown from "react-countdown";
import {Link} from "react-router-dom"

export default function DiscountSection() {
  const [da, setDays] = useState();
  const [ho, setHour] = useState();
  const [mi, setMinet] = useState();
  const [se, setSecound] = useState();
  const [comp, setComp] = useState("");

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      setComp("Discount End");
    } else {
      // Render a countdown
      setDays(days);
      setHour(hours);
      setMinet(minutes);
      setSecound(seconds);
    }
  };

  return (
    <div className="disc">
      <div className="layer">
        {comp ? (
          <div>
            <h1>Time End</h1>
          </div>
        ) : (
          <>
            <div className="heading">
              <h2>15% Discount</h2>
              <h3>On All Kid's Education Toys</h3>
            </div>
            <h5>Offer Expires on</h5>
            <div className="offer-expires">
              <div className="date">
                <h6>{da}</h6>
                <p>Days</p>
              </div>
              <div className="date">
                <h6>{ho}</h6>
                <p>Hrs</p>
              </div>
              <div className="date">
                <h6>{mi}</h6>
                <p>Mins</p>
              </div>
              <div className="date">
                <h6>{se}</h6>
                <p>Secs</p>
              </div>
            </div>
            <Link to="/shop">
            <button className="shop-now">Shop Now</button>
            </Link>
          </>
        )}
        <Countdown date={"2024-02-16T01:02:03"} renderer={renderer} />,
      </div>
    </div>
  );
}
