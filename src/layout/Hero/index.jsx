import styled from "styled-components";

function Hero() {
  return (
    <Container>
      <HeroWrapper>
        <Line1>
          <Gray>"&nbsp;</Gray>i&nbsp;<Gray>co</Gray>De,
        </Line1>
        <Line2>
          i&nbsp;<Gray>m</Gray>
          AK
          <Gray>e,</Gray>
        </Line2>
        <Line3>
          i b<Gray>Ui</Gray>lD,
        </Line3>
        <Line4>
          I D<Gray>es</Gray>
          ign. "
        </Line4>
      </HeroWrapper>
      <BarcodeContainer></BarcodeContainer>
    </Container>
  );
}

export default Hero;

const Container = styled.section`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);

  margin-top: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

const Line = styled.div`
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;

  padding: 0 5%;

  position: relative;

  display: flex;
  align-items: center;

  font-family: "Major Mono Display", sans-serif;
  font-weight: 600;
  line-height: 0;

  background-color: black;
  color: white;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: white;
    mix-blend-mode: difference;

    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0, 0.94, 0.7, 0.96);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Line1 = styled(Line)`
  justify-content: flex-end;
  font-size: 10vw;

  &:after {
    transform-origin: right center;
  }
`;

const Line2 = styled(Line)`
  justify-content: flex-start;
  font-size: 10vw;

  &:after {
    transform-origin: left center;
  }
`;
const Line3 = styled(Line)`
  justify-content: flex-end;
  font-size: 10vw;

  &:after {
    transform-origin: right center;
  }
`;
const Line4 = styled(Line)`
  justify-content: flex-start;
  font-size: 10vw;

  &:after {
    transform-origin: left center;
  }
`;

const Gray = styled.span`
  color: #504f4f;
`;

const BarcodeContainer = styled.div`
  width: 100%;
  height: 15vh;
  margin: 5vh 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// const Barcode = styled.span`
//   color: white;
//   font-size: 5vmax;
//   font-family: "Libre Barcode 39 Text";
// `;
