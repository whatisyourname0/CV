import HeadingContainer from "@components/HeadingContainer";
import SkillCard from "@components/SkillCard";
import styled from "styled-components";

import designImage from "@assets/skills/design.png";
import frontImage from "@assets/skills/frontEnd.png";
import backImage from "@assets/skills/backEnd.png";
import testImage from "@assets/skills/test.png";
import skillWriteups from "./skillWriteups";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { useSetRecoilState } from "recoil";
import { focusedSectionAtom } from "@store/atoms";

function Skills({ sectionRefs }) {
  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, {
    threshold: THRESHOLD,
  });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  useEffect(() => {
    if (sectionEntry?.intersectionRatio > 0.9) {
      setFocusedSection(2);
    }
  }, [sectionEntry, setFocusedSection]);

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Skills: el };
        scrollRef.current = el;
      }}
    >
      <HeadingContainer writeups="Skills" />
      <SkillsWrapper>
        <SkillCard
          imgSrc={designImage}
          writeups={skillWriteups.designWriteup()}
        />
        <SkillCard
          imgSrc={frontImage}
          writeups={skillWriteups.frontEndWriteup()}
        />
        <SkillCard
          imgSrc={backImage}
          writeups={skillWriteups.backendWriteup()}
        />
        <SkillCard imgSrc={testImage} writeups={skillWriteups.testWriteup()} />
      </SkillsWrapper>
    </Container>
  );
}

export default Skills;

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
