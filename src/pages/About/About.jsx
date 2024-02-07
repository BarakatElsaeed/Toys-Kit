import React from "react";
import "./About.scss";
import rightimg from "./sibling-1023000_1280.jpg";
import overimg from "./abo-new-1.webp";
import overimg2 from "./abo-new-2.webp";
import bgimg from "./abo-new-big.webp";
import smimg1 from "./abo-new-one.webp";
import smimg2 from "./abo-new-two.webp";
import smimg3 from "./abo-new-three.webp";
import smimg4 from "./abo-new-four.webp";
import lastone from "./abou-log0-1.webp";
import lastTwo from "./abou-log0-2.webp";
import lastThree from "./abou-log0-3.webp";
import lastfour from "./abou-log0-4.webp";
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faPuzzlePiece,
  faPaintbrush,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <div className="header__">
        <SecoundHeader name="About" />
      </div>
      <div className="TheSecond">
        <div className="the-left">
          <h3>Toys for every age</h3>
          <p>
            Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka
            dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper
            suscipit, posuere a, pede. Donec nec justo eget felis facilisis
            fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio
            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequate. Etiam pretium varius quam in aliquam. Curabitur
            malesuada elit sed enim placerat, vitae interdum erat cursus. Morbi
            laoreet sapien id scelerisque dapibus. Aliquam erat volutpat. Nunc
            pulvinar tempus dui in tristique. Aliquam sem fringilla ut morbi
            tincidunt. Risus nec feugiat in fermentum posuere urna nec
            tincidunt. Urna et pharetra pharetra massa massa ultricies mi quis.
            Sapien pellentesque habitant morbi tristique senectus. Nam aliquam
            sem et tortor consequate.
          </p>
          <h6>
            Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem
            quis dui placerat ornare. Tortor dignissim convallis aenean et
            tortor. Ac tincidunt vitae semper quis lectus nulla at volutpate
          </h6>
        </div>
        <div className="the-right">
          <img src={rightimg} alt="" />
        </div>
      </div>
      <div className="third-section">
        <div className="One">
          <img src={overimg} alt="" />

          <div className="ovarlay">
            <h3>Every Toys have Spirit of Joy</h3>
            <p>
              Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
              pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem
              quis dui placerat ornare. Pellentesque odio nisi, euismod in
              pharetrae. Quisque volutpat mattis eros. Nullam malesuada erat ut
              ki diaml ka dhuddu pochu turpis.
            </p>
          </div>
        </div>

        <div className="Two">
          <img src={overimg2} alt="" />

          <div className="ovarlay-Two">
            <h3>Develop kids learning skills</h3>
            <p>
              Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka
              dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper
              suscipit, posuere a, pede. Donec nec justo eget felis facilisis
              fermentum. Morbi in sem quis dui placerat ornare. Pellentesque
              odio nisi, euismod in pharetrae.
            </p>
          </div>
        </div>
      </div>
      <div className="fourth">
        <div className="fourth-head">
          <h2>Purest little creation</h2>
          <h6>Start babies beautiful journey with toys</h6>
          <p>
            Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka
            dhuddu pochu turpis <br />. Suspendisse urna nibh,viverra non,
            semper suscipit, posuere a, <br /> pede. Donec nec justo eget felis
            facilisis fermentum.
          </p>
        </div>
        <div className="fourth-end">
          <div className="end-one">
            <div className="one__">
              <h4>
                {" "}
                <FontAwesomeIcon className="fourth-i" icon={faImages} />{" "}
                High-contrast images
              </h4>
              <p>
                Morbi in risus in nisi eleifend convallis. Etiam pretium
                variusen quameden in aliquam. Curabitur malesuada elites enim
                placerat, vitaesedium interdumerat porttitor leocursue.
              </p>
            </div>

            <div className="two__">
              <h4>
                {" "}
                <FontAwesomeIcon
                  className="fourth-i"
                  icon={faPuzzlePiece}
                />{" "}
                Budget-friendly toys
              </h4>
              <p>
                Pellentesque euismod vestibulum sollicitudin. Nunc sem nulla,
                consequateget nisi non, efficitur posuere odio. Duis pretium
                preertyotium neque, sit amets ullamcorper dignissims.
              </p>
            </div>
          </div>

          <div className="end-one">
            <div className="one__">
              <h4>
                {" "}
                <FontAwesomeIcon className="fourth-i" icon={faPaintbrush} />
                Food grade paint
              </h4>
              <p>
                Sed semper ante vel sapien tincidunt, sed commodo odio
                pretiumer. Fusce posuere leo ut lacus efficitur, nec malesuada
                ex variusious. Etiamidtin cidunt velit. Suspendisse arcune.
              </p>
            </div>

            <div className="two__">
              <h4>
                {" "}
                <FontAwesomeIcon className="fourth-i" icon={faPenToSquare} />
                High-quality raw materials
              </h4>
              <p>
                Cras pretium risus ac tempor ultrices. Phasellus pretium
                exodiosit ametultricies nulla accumsan quis. Morbi pharetra orci
                rutrum ultricestempor. Proin venenatis nisl duime.
              </p>
            </div>
          </div>
        </div>

        <div className="thefive">
          <h4>Environmental Friendly</h4>

          <div className="all-imges">
            <div className="big-img">
              <img src={bgimg} alt="" />
            </div>
            <div className="small-imgs">
              <div className="rightimg">
                <img src={smimg1} alt="" />
                <img src={smimg2} alt="" />
              </div>
              <div className="left-imges">
                <img src={smimg3} alt="" />
                <img src={smimg4} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="last">
            <div className="logo__">
                <img src= {lastone} alt="" />

            </div>
            <div className="logo__">
                <img src= {lastTwo} alt="" />

            </div>      
            <div className="logo__">
                <img src= {lastThree} alt="" />

            </div>
            <div className="logo__">
                <img src= {lastfour} alt="" />

            </div>

        </div>
      </div>
    </>
  );
}
