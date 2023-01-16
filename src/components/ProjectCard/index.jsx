import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import styled from "styled-components";

function ProjectCard({ title, description, repolink, stack, reverse }) {
  const handleCardClick = () => {};

  return (
    <Container
      reverseOrder={reverse === true}
      onClick={handleCardClick}
      data-scroll-section
    >
      <Description>
        <Title>
          <span>{title}</span>
        </Title>
        <Desc>{description}</Desc>
        <HorizontalBar />
        <StackTitle>Stack</StackTitle>
        <StackContainer>
          {stack.map((el, idx) => {
            return <Stack key={idx}>{el}</Stack>;
          })}
        </StackContainer>
        <IconContainer>
          <ExternalLink
            href={repolink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon />
            <LinkDesc>Repo Link</LinkDesc>
            <LinkDesc className="dark">→</LinkDesc>
          </ExternalLink>
        </IconContainer>
      </Description>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </Container>
  );
}

export default ProjectCard;

const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: ${(props) => (props.reverseOrder ? "row" : "row-reverse")};

  background-color: black;
  color: white;
`;

const Description = styled.div`
  width: 50%;

  margin-bottom: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5vh;
`;

const Title = styled.h3`
  position: relative;

  padding: 5px;

  font-weight: 600;
  letter-spacing: 2px;
  font-size: 5.5vw;

  overflow: hidden;
`;

const Desc = styled.p`
  font-size: 1vw;
  line-height: 1.3;
`;

const HorizontalBar = styled.hr`
  width: 100%;
  height: 3px;

  margin: 2vh 0;

  background-color: white;
`;

const StackTitle = styled.h3`
  font-weight: 300;
  font-size: 5vw;
`;

const ImageContainer = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const StackContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1vmax;
  grid-template-columns: 1fr 1fr;
`;

const Stack = styled.li`
  font-weight: 300;
  font-size: 1.8vw;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: white;

  padding: 0 20px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    background-color: #ffffff;
    mix-blend-mode: difference;

    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover::after {
    transform: scaleX(1);

    font-weight: 500;
  }
`;

const GithubIcon = styled(AiFillGithub)`
  width: 50px;
  height: 50px;
`;

const LinkDesc = styled.span`
  font-size: 2vw;
  font-weight: 300;

  &.dark {
    position: sticky;
    font-weight: 500;
    font-size: 3vw;
    z-index: 100;
    color: black;
  }
`;
