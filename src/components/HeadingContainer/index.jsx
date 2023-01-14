import styled from "styled-components";

function HeadingContainer({ number, writeups }) {
  return (
    <Container>
      <HeadingWrapper>
        <HorizonalDivider />
        <Fonts>
          <H4>#{number}</H4>
          <H2>{writeups}</H2>
        </Fonts>
        <HorizonalDivider2 />
      </HeadingWrapper>
    </Container>
  );
}

export default HeadingContainer;

const Container = styled.figure`
  width: 100%;

  padding: 10vh 0 10vh;

  background-color: black;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Fonts = styled.div`
  flex-grow: 1;

  font-family: "Neue Montreal";
  font-weight: 500;
  line-height: 1;

  padding: 0 2.5vw;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5vw;

  color: white;
`;

const H4 = styled.h4`
  font-size: 4vw;
`;

const H2 = styled.h2`
  font-size: 8vw;
`;

const HorizonalDivider = styled.hr`
  height: 0%;
  flex-grow: 1;
  background-color: transparent;
  border-top: 3px solid white;
`;

const HorizonalDivider2 = styled.hr`
  height: 0%;
  flex-grow: 2;
  background-color: transparent;
  border-top: 3px solid white;
`;
