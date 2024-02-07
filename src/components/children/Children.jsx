import React from "react";
import "./children.scss";
import chilTwo from "./grid-2.webp";
import chilThree from "./grid-3.webp";

export default function Children() {
  return (
    <>
      <div className="BigSection">
        <h2>
          It's never been easier to <br /> invest in your kid's toys
        </h2>
        <div className="first">
          <div className="right">
            <img src={chilTwo} alt="" />
          </div>
          <div className="left">
            <h4>
              Creative modern wooden toys for <br /> kids development
            </h4>
            <p>
              Ut faucibus pulvinar elementum integer enim neque volutpat. <br />
              Blandit volutpat maecenas  volutpat blandit aliquam etiam <br />
             erat. Elit scelerisque mauris pellentesque pulvinar 
              pellentesque.
            </p>
          </div>
        </div>

        <div className="last">
          <div className="right">
            <h4>
              Wooden toys that will delight <br/> your little one a lot
            </h4>
            <p>
              Nisl vel pretium lectus quam id leo in vitae. Eros in cursus
              turpis massa..<br /> Blandit massa enim nec dui nunc Turpis in eu mi
              bibendum neque egestas. .<br /> Viverra nam libero justo laoreet sit amet
              cursus sit.
            </p>
          </div>
          <div className="left">
            <img src={chilThree} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
