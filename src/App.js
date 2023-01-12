import Header from "@layout/Header";
import AboutMe from "@layout/Aboutme";
import Hero from "@layout/Hero";
import "@styles/reset.css";
import "@styles/global.css";
import styled from "styled-components";
import { customScrollbar } from "@styles/scrollbar";
import Projects from "@layout/Projects";
import Skills from "@layout/Skills";
import Blog from "@layout/Blog";
import HeadConfig from "@utils/HeadConfig";
import Contact from "@layout/Contact";
import Footer from "@layout/Footer";

function App() {
  return (
    <>
      <HeadConfig />
      <Header />
      <Wrapper>
        <Hero />
        <PaddingControl>
          <AboutMe />
          <Projects />
          <Skills />
          <Blog />
        </PaddingControl>
        <Contact />
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
