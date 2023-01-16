import styled from "styled-components";
import { FaCodeBranch } from "@react-icons/all-files/fa/FaCodeBranch";
import { BsGearFill } from "@react-icons/all-files/bs/BsGearFill";
import { SiWebpack } from "@react-icons/all-files/si/SiWebpack";
import { CgFigma } from "@react-icons/all-files/cg/CgFigma";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

function Hero() {
  return (
    <Container>
      <HeroWrapper>
        <Line1>
          <Icon1 />
          <div>
            <Gray>"&nbsp;</Gray>i&nbsp;<Gray>co</Gray>De,
          </div>
        </Line1>
        <Line2>
          <div>
            i&nbsp;<Gray>m</Gray>
            AK
            <Gray>e,</Gray>
          </div>
          <Icon2 />
        </Line2>
        <Line3>
          <Icon3 />
          <div>
            i b<Gray>Ui</Gray>lD,
          </div>
        </Line3>
        <Line4>
          <div>
            I D<Gray>es</Gray>
            ign. "
          </div>
          <Icon4 />
        </Line4>
      </HeroWrapper>
      <BarcodeContainer>
        <Barcode>WhatIsYourName0</Barcode>
        <ExtLink
          href="https://github.com/whatisyourname0/personal-website"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon />
        </ExtLink>
      </BarcodeContainer>
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
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

const Line = styled.div`
  width: 100%;
  height: 25vh;
  flex-grow: 1;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

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
  font-size: 10vw;

  &:after {
    transform-origin: right center;
  }
`;

const Icon1 = styled(FaCodeBranch)`
  color: black;
  width: 150px;
  height: 150px;

  margin-left: 10%;
  z-index: 1;
`;

const Line2 = styled(Line)`
  font-size: 10vw;

  &:after {
    transform-origin: left center;
  }
`;

const Icon2 = styled(BsGearFill)`
  color: black;
  width: 150px;
  height: 150px;

  margin-right: 10%;
  z-index: 1;
`;

const Line3 = styled(Line)`
  font-size: 10vw;

  &:after {
    transform-origin: right center;
  }
`;

const Icon3 = styled(SiWebpack)`
  color: black;
  width: 150px;
  height: 150px;

  margin-left: 10%;
  z-index: 1;
`;

const Line4 = styled(Line)`
  font-size: 10vw;

  &:after {
    transform-origin: left center;
  }
`;

const Icon4 = styled(CgFigma)`
  color: black;
  width: 150px;
  height: 150px;

  margin-right: 5%;
  z-index: 1;
`;

const Gray = styled.span`
  color: #504f4f;
`;

const BarcodeContainer = styled.div`
  width: 100%;
  height: 15vh;
  padding: 10vh 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5vh;

  z-index: 100;
`;

const Barcode = styled.span`
  color: white;
  font-size: 5vmax;
  font-family: "Libre Barcode 39 Text";
`;

const ExtLink = styled.a`
  display: block;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: white;
`;

const GithubIcon = styled(AiFillGithub)`
  width: 3vmax;
  height: 3vmax;
`;
