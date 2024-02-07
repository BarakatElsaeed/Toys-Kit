import img1 from "./icon-1.webp"
import img2 from "./icon-2.webp"
import img3 from "./icon-3.webp"
import "./BenefitSection.scss"
export default function Benefit() {
  return (
    <>


      <div className="HeadSection">

          <h3>Here's how  it works</h3>   
      </div>
    <div className="main-section">

      <div className="sec">
        <img src={img1} alt="" />
        <h4>Inspires</h4>
        <p>
          Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
          Elementum sagittis.
        </p>
      </div>

      <div className="sec">
        <img src={img2} alt="" />
        <h4>Encouraging</h4>
        <p>
          Morbi tincidunt ornare massa eget. Ullamcorper a lacus vestibulum sed
          arcu non odio.
        </p>
      </div>

      <div className="sec">
        <img src={img3} alt="icon" />
        <h4>Creative</h4>
        <p>
          Cras semper auctor neque vitae tempus quam pellentesque. At augue eget
          arcu dictum
        </p>
      </div>
    </div>
    </>
  );
}
