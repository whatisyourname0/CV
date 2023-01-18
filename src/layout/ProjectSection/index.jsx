import HeadingContainer from "@components/HeadingContainer";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { focusedSectionAtom } from "@store/atoms";
import { useSetRecoilState } from "recoil";
import ProjectCard from "@components/ProjectCard";
import { PROJECTS } from "./projects";
import Carousal from "./Carousal";

function ProjectSection({ sectionRefs }) {
  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, { threshold: 0.9 });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  useEffect(() => {
    if (sectionEntry?.intersectionRatio > THRESHOLD) {
      setFocusedSection(1);
    }
  }, [sectionEntry, setFocusedSection]);

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Projects: el };
        scrollRef.current = el;
      }}
    >
      <HeadingContainer number="002" writeups="Projects" />
      <ProjectContainer>
        <SpellContainer>
          <Spell>Everyone can spell the code,</Spell>
          <Spell className="pink">
            But not everyone can write the&nbsp;
            <Carousal />
          </Spell>
        </SpellContainer>
        <CardContainer>
          {PROJECTS.map((prj, idx) => {
            return (
              <ProjectCard
                key={idx}
                title={prj.title}
                description={prj.description}
                repolink={prj.repolink}
                stack={prj.stacks}
                reverse={idx % 2 === 0}
              />
            );
          })}
        </CardContainer>
      </ProjectContainer>
    </Container>
  );
}

export default ProjectSection;

const Container = styled.section`
  width: 100%;
`;

const ProjectContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SpellContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  padding: 4vh 0 8vh;
  padding-left: 5vw;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Spell = styled.span`
  display: inline-block;
  font-family: "Neue Montreal";
  font-size: 4.3vw;
  font-weight: 400;
  line-height: 1.2;

  color: white;

  &.pink {
    display: flex;
  }
`;

const CardContainer = styled.div`
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
`;
