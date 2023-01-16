import styled from "styled-components";

import lottiePhone from "@assets/lottie/phone.json";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { focusedSectionAtom } from "@store/atoms";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import Lottie from "react-lottie-player";
import { useSetRecoilState } from "recoil";
import Bubble from "./Bubble";

function Contact({ sectionRefs }) {
  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, {
    threshold: THRESHOLD,
  });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (sectionEntry?.intersectionRatio > 0.9) {
      setFocusedSection(4);
    }
  }, [sectionEntry, setFocusedSection]);

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Contact: el };
        scrollRef.current = el;
      }}
    >
      <SpellContainer>
        <Spell>Pretty Interested?&nbsp;&nbsp;</Spell>
      </SpellContainer>
      <FooterContainer>
        <LottieContainer>
          <Bubble isContactOpen={isContactOpen} />
          <LottiePlayer
            loop
            animationData={lottiePhone}
            play
            onClick={(event) => {
              setIsContactOpen((prev) => !prev);
            }}
          />
        </LottieContainer>
        <MarqueeWrapper>
          <CustomMarquee pauseOnHover gradient={false}>
            WhatIsYourname? ⚪ WhatIsYourname? ⚪ WhatIsYourname? ⚪
            WhatIsYourname? ⚪ WhatIsYourname? ⚪ WhatIsYourname? ⚪
            WhatIsYourname? ⚪ WhatIsYourname? ⚪ WhatIsYourname? ⚪
            WhatIsYourname? ⚪WhatIsYourname? ⚪ WhatIsYourname? ⚪
            WhatIsYourname? ⚪
          </CustomMarquee>
        </MarqueeWrapper>
      </FooterContainer>
    </Container>
  );
}

export default Contact;

const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
`;

const SpellContainer = styled.div`
  width: 100%;
  padding: 4vh;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Spell = styled.span`
  display: inline-block;

  margin-left: 5vw;
  font-family: "Neue Montreal";
  font-size: 5vw;
  font-weight: 400;
  line-height: 1.2;

  color: black;
`;

const FooterContainer = styled.div`
  width: 100%;
`;

const LottieContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LottiePlayer = styled(Lottie)`
  width: 150px;
  height: 150px;

  cursor: pointer;
`;

const MarqueeWrapper = styled.div`
  width: 100%;
  height: 20px;

  padding: 3vh 0;

  overflow: hidden;
  white-space: nowrap;

  background-color: black;
  color: white;

  letter-spacing: 2px;
`;

const CustomMarquee = styled(Marquee)`
  width: 100%;
  height: 100%;
`;
