import HeadingContainer from "@components/HeadingContainer";
import styled from "styled-components";
import { IoConstruct } from "@react-icons/all-files/io5/IoConstruct";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { useSetRecoilState } from "recoil";
import { focusedSectionAtom } from "@store/atoms";

function Blog({ sectionRefs }) {
  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, {
    threshold: THRESHOLD,
  });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  useEffect(() => {
    if (sectionEntry?.intersectionRatio > THRESHOLD) {
      setFocusedSection(3);
    }
  }, [sectionEntry, setFocusedSection]);

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Blog: el };
        scrollRef.current = el;
      }}
    >
      <HeadingContainer writeups="Blog" />
      <BlogContainer>
        <Icon />
        <TempSpan>Under construction...</TempSpan>
        <Icon />
      </BlogContainer>
    </Container>
  );
}

export default Blog;

const Container = styled.div`
  width: 100%;
`;

const BlogContainer = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TempSpan = styled.span`
  display: inline-block;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 48px;
  margin: 0 20px;

  text-transform: uppercase;
`;

const Icon = styled(IoConstruct)`
  width: 100px;
  height: 100px;
`;
