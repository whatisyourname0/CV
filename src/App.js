import lottieScrollDown from "@assets/lottie/scrollDown.json";
import SmoothScroll from "@components/SmoothScroll";
import useIdle from "@hooks/useIdle";
import useMediaQuery from "@hooks/useMediaQuery";
import AboutMe from "@layout/Aboutme";
import Blog from "@layout/Blog";
import Contact from "@layout/Contact";
import Footer from "@layout/Footer";
import Hero from "@layout/Hero";
import ProjectSection from "@layout/ProjectSection";
import Skills from "@layout/Skills";
import { customScrollbar } from "@styles/scrollbar";
import "@styles/styles.css";
import HeadConfig from "@utils/HeadConfig";
import { useRef } from "react";
import Lottie from "react-lottie-player";
import styled, { css } from "styled-components";

// TODO: Make it Responsive & Polyfill;

function App() {
  const sectionRefs = useRef({});
  const showanimation = useIdle(5e3);
  const isDesktop = useMediaQuery({
    query: "(min-width : 1280px)",
  });

  return (
    <Body>
      <HeadConfig />
      {isDesktop && (
        <LottiePlayer
          loop
          animationData={lottieScrollDown}
          play
          showanim={showanimation.toString()}
        />
      )}
      <SmoothScroll />
      <Wrapper>
        <Hero />
        <AboutMe sectionRefs={sectionRefs} />
        <ProjectSection sectionRefs={sectionRefs} />
        <Skills sectionRefs={sectionRefs} />
        <Blog sectionRefs={sectionRefs} />
        <Footer />
        <Contact sectionRefs={sectionRefs} />
      </Wrapper>
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
