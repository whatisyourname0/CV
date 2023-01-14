import HeadingContainer from "@components/HeadingContainer";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { focusedSectionAtom } from "@store/atoms";
import { useSetRecoilState } from "recoil";
import ProjectCard from "@components/ProjectCard";
import { PROJECTS } from "./projects";

const QUALITY_WRITEUPS = ["quality", "talent", "grit"];

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
          <Spell>
            But not everyone can write the&nbsp;
            <Spell className="pink">quality.</Spell>
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

  padding: 4vh 0 8vh;
  padding-left: 5vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Spell = styled.span`
  font-family: "Neue Montreal";
  font-size: 4.3vw;
  font-weight: 400;
  line-height: 1.2;

  color: white;

  &.pink {
    background-color: #f6f6f6;
    color: black;
  }
`;

const CardContainer = styled.div`
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
`;
