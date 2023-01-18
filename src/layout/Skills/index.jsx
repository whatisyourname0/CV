import HeadingContainer from "@components/HeadingContainer";
import styled, { css } from "styled-components";

import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { focusedSectionAtom } from "@store/atoms";
import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { LINES } from "./skills";
import { Textfit } from "react-textfit";
import useSingleEffect from "@hooks/useSingleEffect";

const CATEGORY = ["Frontend", "Backend", "Design", "Others"];

const profToColor = (prof) => {
  switch (+prof) {
    case 1:
      return "#9d2f33";
    case 2:
      return "#d39816";
    case 3:
      return "#96d90654";
    default:
      return "white";
  }
};

function Skills({ sectionRefs }) {
  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, {
    threshold: THRESHOLD,
  });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  const [area, setArea] = useState(0);

  useEffect(() => {
    if (sectionEntry?.intersectionRatio > 0.9) {
      setFocusedSection(2);
    }
  }, [sectionEntry, setFocusedSection]);

  useSingleEffect(() => {
    setInterval(() => {
      setArea((prev) => (prev + 1) % 4);
    }, 4000);
  });

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Skills: el };
        scrollRef.current = el;
      }}
    >
      <HeadingContainer number="003" writeups="Skills" />
      <SkillsWrapper>
        <LanguagesContainer id="SkillsSection">
          <LanguageHeader>
            <Textfit mode="single">
              {CATEGORY.map((el, idx) => {
                return (
                  <Category key={idx} isSelected={idx === area}>
                    {el}&nbsp;
                  </Category>
                );
              })}
            </Textfit>
          </LanguageHeader>
          {LINES.map((line, idx) => {
            return (
              <LineContainer key={idx}>
                <Textfit mode="single">
                  {line.map((lang, idx2) => {
                    return (
                      <TextWrapper
                        key={idx2}
                        prof={profToColor(lang.prof)}
                        isSelected={lang.type === CATEGORY[area]}
                      >
                        <Text isSelected={lang.type === CATEGORY[area]}>
                          {lang.name}
                        </Text>
                      </TextWrapper>
                    );
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

const LanguagesContainer = styled.div`
  width: 100%;
`;

const LanguageHeader = styled.div`
  width: 100%;
  height: 3vh;

  padding-bottom: 8vh;
`;

const Category = styled.span`
  display: inline-block;
  padding: 0 3vw;

  color: ${(props) => (props.isSelected ? "#ffffff" : "#232323")};
  transition: color 0.8s ease-in-out;
`;

const LineContainer = styled.div`
  width: 100%;
  height: 10vh;
  padding: 2vh 0;
`;

const TextWrapper = styled.div`
  display: inline-block;
  padding: 0 3vw;
  position: relative;
  line-height: 1.1;

  ${(props) =>
    props.isSelected &&
    css`
      &:after {
        content: "";
        position: absolute;
        bottom: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.prof};
        mix-blend-mode: screen;

        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      &:hover::after {
        transform: scaleX(1);
      }
    `}
`;

const Text = styled.span`
  font-family: "Lato";
  font-weight: 800;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#232323")};
  transition: color 0.8s ease-in-out;
`;
