import HeadingContainer from "@components/HeadingContainer";
import useLocale from "@hooks/useLocale";
import helloWord from "@utils/locale/helloWord";
import styled from "styled-components";
import Introduction from "./introduction";
import logo192 from "@assets/images/logo/logo512Light.png";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { useSetRecoilState } from "recoil";
import { focusedSectionAtom } from "@store/atoms";

function AboutMe({ sectionRefs }) {
  // Get Location
  const locale = useLocale();

  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, {
    threshold: THRESHOLD,
  });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  useEffect(() => {
    if (sectionEntry?.intersectionRatio > THRESHOLD) {
      setFocusedSection(0);
    }
  }, [sectionEntry, setFocusedSection]);

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, "About Me": el };
        scrollRef.current = el;
      }}
    >
      <HeadingContainer number="001" writeups="About Me" />
      <ContentContainer>
        <HelloContainer>
          <Hello>{helloWord(locale)}</Hello>
        </HelloContainer>
        <ImageWrapper>
          <ImageMySelf src={logo192} />
        </ImageWrapper>
        <Description>
          <Introduction locale={locale} />
        </Description>
      </ContentContainer>
    </Container>
  );
}

export default AboutMe;

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  color: white;
  background-color: black;
`;

const ContentContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0 12.5%;
`;

const HelloContainer = styled.div`
  width: 100%;

  padding-bottom: 8vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Hello = styled.h2`
  font-family: "Montserrat";
  font-size: 6vw;
  font-weight: 500;

  margin-left: 15vw;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-right: 25vw;
  padding-bottom: 5vh;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ImageMySelf = styled.img`
  width: 300px;
  height: 300px;
  vertical-align: middle;

  border: 5px solid white;
  border-radius: 100%;
`;
