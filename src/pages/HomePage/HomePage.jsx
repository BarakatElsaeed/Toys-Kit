import { Container } from "react-bootstrap";
import "./HomePage.scss";
import PopularProducts from "../../components/productSection/PopularProducts";
import Benefit from "../../components/BenefitSection/BenefitSection";
import AdsSection from "../../components/AdsSection/AdsSection";
import Children from "../../components/children/Children";
import DiscountSection from "../../components/DiscountSection/DiscountSection";
import Feedback from "../../components/Feedback/Feedback";


export default function Homepage() {
  return (
    <div className="Home">
      <div className="firstsection">
        <div className="filter">
          <div className="text wow animate__animated  animate__flash animate__delay-100ms">
            <h5 className=" wow animate__animated  animate__bounceInDown animate__delay-1s ">
              Big fun for kids !
            </h5>
            <h2 className=" wow animate__animated animate__backInLeft animate__delay-3s">
              A world To Explore
            </h2>

            <p className=" wow animate__animated animate__bounceInUp animate__delay-2s">
              Active toys for smart and active kids. Bring fun and <br />
              non-stop learning for your little ones
            </p>
          </div>
        </div>
      </div>

      <Container>
        <Benefit />
      </Container>

      <AdsSection />
      <Container>
        <Children />
      </Container>
      <Container>
        <PopularProducts />
      </Container>
      <DiscountSection />
      <Container>

      <Feedback/>
      </Container>
    
    </div>
  );
}
