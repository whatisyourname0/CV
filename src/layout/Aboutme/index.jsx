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

  padding: 0vh 12.5% 0;
`;
