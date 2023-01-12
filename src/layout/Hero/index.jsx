import styled, { css } from "styled-components";
import { GoCloudDownload } from "@react-icons/all-files/go/GoCloudDownload";
import useScroll from "@hooks/useScroll";
import { useEffect, useState } from "react";

function Hero() {
  const { y } = useScroll();
  const [blurOffset, setBlurOffset] = useState(0);

  useEffect(() => {
    let vh = window.innerHeight;
    setBlurOffset(5 * Math.min(y / vh, 1));
  }, [y, blurOffset]);

  return (
    <Container>
      <BgImage blurOffset={blurOffset} />
      <HeroWrapper>
        <HeroTitle>I code, I build, I make</HeroTitle>
        <HeroDesc>End-to-End Developer & Life Craftsman</HeroDesc>
        <a href="/">
          <ResumeButton>
            <span>
              <em>Get Resume</em>
              <i>
                <CloudIcon />
              </i>
            </span>
          </ResumeButton>
        </a>
      </HeroWrapper>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BgImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  background-image: url("/images/background/background1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  ${(props) =>
    props.blurOffset !== 0
      ? css`
          filter: brightness(35%) blur(${props.blurOffset}px);
        `
      : css`
          filter: brightness(35%);
        `}
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  z-index: 1;
`;

const HeroTitle = styled.h1`
  display: block;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 75px;
  text-transform: uppercase;

  color: #ffffff;
`;

const HeroDesc = styled.h2`
  display: block;
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 50px;

  color: #ffffff;
`;

const ResumeButton = styled.button`
  width: 160px;
  height: 55px;

  position: relative;

  font-size: 20px;
  font-weight: 500;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 0.5px;

  border: 3.5px solid #ffffff;
  margin-top: 20px;
  padding: 14px 0;
  border-radius: 50px;

  background-color: transparent;
  color: white;

  cursor: pointer;
  appearance: none;
  overflow: hidden;

  transition: all 0.3s ease;

  &:hover {
    background-color: white;
  }

  span,
  em,
  i {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }

  em {
    top: -60%;
    line-height: 60px;
  }

  i {
    top: 140%;
    line-height: 60px;
  }

  em,
  i {
    transition: top 0.3s ease;
  }

  &:hover {
    em {
      top: -160%;
    }
    i {
      top: -50%;
    }
  }
`;

const CloudIcon = styled(GoCloudDownload)`
  font-size: 24px;
  color: black;
`;
