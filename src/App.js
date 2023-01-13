import Header from "@layout/Header";
import AboutMe from "@layout/Aboutme";
import Hero from "@layout/Hero";
import "@styles/reset.css";
import "@styles/global.css";
import styled from "styled-components";
import { customScrollbar } from "@styles/scrollbar";
import ProjectSection from "@layout/ProjectSection";
import Skills from "@layout/Skills";
import Blog from "@layout/Blog";
import HeadConfig from "@utils/HeadConfig";
import Contact from "@layout/Contact";
import Footer from "@layout/Footer";
import { useRef } from "react";

function App() {
  const sectionRefs = useRef({});

  return (
    <>
      <HeadConfig />
      <Header sectionRefs={sectionRefs} />
      <Wrapper>
        <Hero />
        <PaddingControl>
          <AboutMe sectionRefs={sectionRefs} />
          <ProjectSection sectionRefs={sectionRefs} />
          <Skills sectionRefs={sectionRefs} />
          <Blog sectionRefs={sectionRefs} />
        </PaddingControl>
        <Contact sectionRefs={sectionRefs} />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.main`
  width: 100%;
  ${customScrollbar};
`;

const PaddingControl = styled.div`
  padding: 0 12.5%;
`;
