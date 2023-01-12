import styled from "styled-components";

function SkillCard({ imgSrc, writeups }) {
  return (
    <Container>
      <ImageWrapper>
        <img src={imgSrc} alt="skills" />
      </ImageWrapper>
      <WriteupWrapper>
        <Writeup>{writeups}</Writeup>
      </WriteupWrapper>
    </Container>
  );
}

export default SkillCard;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 50px;
`;

const ImageWrapper = styled.div`
  flex-grow: 2;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const WriteupWrapper = styled.div`
  flex-grow: 1;
`;

const Writeup = styled.p`
  font-size: 1em;
  font-family: "Open Sans";

  line-break: auto;

  line-height: 1.2;
`;
