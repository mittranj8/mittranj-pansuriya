import React from "react";
import Icon1 from "../../assets/images/myStats.svg";
import Icon2 from "../../assets/images/myStats.svg";
import Icon3 from "../../assets/images/myStats.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Web Designing</ServicesH2>
          <ServicesP>
            I can help in building intuitive UI components for your project
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>UX Research</ServicesH2>
          <ServicesP>
            I can help in building intuitive UI components for your project
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>UI Development</ServicesH2>
          <ServicesP>
            I can help in building intuitive UI components for your project
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
