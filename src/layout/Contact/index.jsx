import styled from "styled-components";

import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { focusedSectionAtom } from "@store/atoms";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

function Contact({ sectionRefs }) {
  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, {
    threshold: THRESHOLD,
  });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

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
        <Spell>Interested?</Spell>
      </SpellContainer>
    </Container>
  );
}

export default Contact;

const Container = styled.section`
  width: 100%;
  height: 245px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
`;

const SpellContainer = styled.div`
  width: 100%;

  padding: 4vh 0 8vh;
  padding-left: 5vw;
  color: white;
  font-size: 5vw;
`;

const Spell = styled.span`
  display: inline-block;
  font-family: "Neue Montreal";
  font-size: 4.3vw;
  font-weight: 400;
  line-height: 1.2;

  color: white;
`;
