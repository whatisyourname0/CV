import HeadingContainer from "@components/HeadingContainer";
import SkillCard from "@components/SkillCard";
import styled from "styled-components";

import designImage from "@assets/skills/design.png";
import frontImage from "@assets/skills/frontEnd.png";
import backImage from "@assets/skills/backEnd.png";
import testImage from "@assets/skills/test.png";
import skillWriteups from "./skillWriteups";

function skills() {
  return (
    <Container>
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

export default skills;

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
