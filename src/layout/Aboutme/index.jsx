import HeadingContainer from "@components/HeadingContainer";
import useHover from "@hooks/useHover";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import useLocale from "@hooks/useLocale";
import { focusedSectionAtom } from "@store/atoms";
import helloWord from "@utils/locale/helloWord";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Introduction from "./introduction";

function AboutMe({ sectionRefs }) {
  // Get Location
  const locale = useLocale();

  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, {
    threshold: THRESHOLD,
  });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  const [hoverRef, isHovered] = useHover();

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
        <HelloContainer ref={hoverRef}>
          <Hello isHovered={isHovered}>{helloWord(locale)}</Hello>
        </HelloContainer>
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

  padding: 8vh 12.5% 0;
`;

const HelloContainer = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
`;

const Hello = styled.h2`
  display: block;
  width: 100%;
  font-family: "Montserrat";
  font-size: 6vw;
  font-weight: 500;

  margin-left: 15vw;
`;
