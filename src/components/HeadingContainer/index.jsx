import styled from "styled-components";

function HeadingContainer({ writeups }) {
  return (
    <Container>
      <HeadingWrapper>
        <H2>{writeups}</H2>
        <HorizonalDivider />
      </HeadingWrapper>
    </Container>
  );
}

export default HeadingContainer;

const Container = styled.div`
  width: 100%;
`;

const HeadingWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-family: "Lato";
  font-size: 44px;
  font-weight: 500;
  line-height: 1.5;
`;

const HorizonalDivider = styled.hr`
  flex-grow: 1;
  margin-left: 30px;
  border-top: 3px solid #0000002e;
`;
