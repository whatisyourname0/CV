import Header from "@layout/Header";
import AboutMe from "@layout/Aboutme";
import Hero from "@layout/Hero";
import "@styles/styles.css";
import styled, { css } from "styled-components";
import { customScrollbar } from "@styles/scrollbar";
import ProjectSection from "@layout/ProjectSection";
import Skills from "@layout/Skills";
import Blog from "@layout/Blog";
import HeadConfig from "@utils/HeadConfig";
import Contact from "@layout/Contact";
import Footer from "@layout/Footer";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Lottie from "react-lottie-player";
import lottieScrollDown from "@assets/lottie/scrollDown.json";
import useIdle from "@hooks/useIdle";

function App() {
  const sectionRefs = useRef({});
  const showanimation = useIdle(5e3);
  const locomotiveScrollRef = useRef(null);

  return (
    <Body>
      <HeadConfig />
      <LottiePlayer
        loop
        animationData={lottieScrollDown}
        play
        showanim={showanimation.toString()}
      />
      {/* <LocomotiveScrollProvider> */}
      <Wrapper>
        <Hero />
        <AboutMe sectionRefs={sectionRefs} />
        <ProjectSection sectionRefs={sectionRefs} />
        <Skills sectionRefs={sectionRefs} />
        <Blog sectionRefs={sectionRefs} />
        <Contact sectionRefs={sectionRefs} />
        <Footer />
      </Wrapper>
      {/* </LocomotiveScrollProvider> */}
    </Body>
  );
}

export default App;

const Body = styled.div`
  position: relative;
`;

const Wrapper = styled.main`
  width: 100%;
  background-color: black;
  /* ${customScrollbar}; */
`;

const LottiePlayer = styled(Lottie)`
  width: 125px;
  height: 125px;

  position: fixed;
  top: 85vh;
  right: 2vw;

  background-color: transparent;

  z-index: 100;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  ${(props) => {
    return props.showanim === "true"
      ? css`
          opacity: 1;
        `
      : null;
  }}

  path {
    stroke: white;
    fill: white;
  }
`;
