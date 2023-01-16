import HeadingContainer from "@components/HeadingContainer";
import styled from "styled-components";

import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { focusedSectionAtom } from "@store/atoms";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { LINES } from "./skills";
import { Textfit } from "react-textfit";

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
      <HeadingContainer number="003" writeups="Skills" />
      <SkillsWrapper>
        <SpellContainer>
          <Spell>One for all, all for One.</Spell>
        </SpellContainer>
        <LanguagesContainer>
          <LanguageHeader>
            <Textfit mode="single">
              <Category>Frontend&nbsp;</Category>
              <Category>Backend&nbsp;</Category>
              <Category>Design&nbsp;</Category>
              <Category>Others</Category>
            </Textfit>
          </LanguageHeader>
          {LINES.map((line, idx) => {
            return (
              <LineContainer key={idx}>
                <Textfit mode="single">
                  {line.map((lang, idx2) => {
                    return <TextWrapper key={idx2}>{lang.name}</TextWrapper>;
                  })}
                </Textfit>
              </LineContainer>
            );
          })}
        </LanguagesContainer>
      </SkillsWrapper>
    </Container>
  );
}

export default Skills;

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SkillsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5px;
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

const LanguagesContainer = styled.div`
  width: 100%;
`;

const LanguageHeader = styled.div`
  width: 100%;
  height: 3vh;

  padding-bottom: 4vh;
`;

const Category = styled.span`
  display: inline-block;
  padding: 0 3vw;

  color: #232323;
`;

const LineContainer = styled.div`
  width: 100%;
  height: 10vh;
  padding: 2vh 0;
`;

const TextWrapper = styled.span`
  display: inline-block;
  padding: 0 3vw;

  font-family: "Lato";
  font-weight: 800;
  color: white;
`;
