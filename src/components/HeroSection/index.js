import React, { useState } from "react";
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
  ArrowRight,
  ArrowForw,
} from "./HeroElements";
import Video from "../../assets/videos/homeVideo1.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Hey there, this is Mittranj!</HeroH1>
        <HeroP>
          Want to know more about me? Scroll down and know about the skills and
          experience I have.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="download"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Download Resume {hover ? <ArrowForw /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
