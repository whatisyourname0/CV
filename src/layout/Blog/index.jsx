import HeadingContainer from "@components/HeadingContainer";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { focusedSectionAtom } from "@store/atoms";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

function Blog({ sectionRefs }) {
  const colorClassnames = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

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
      <HeadingContainer number="004" writeups="Blog" />
      <BlogContainer>
        {colorClassnames.map((el, idx) => {
          return (
            <TempSpan
              href="https://0xffffffff.tistory.com"
              className={el}
              key={idx}
            >
              https://0xffffffff.tistory.com
            </TempSpan>
          );
        })}
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

  padding: 10vh 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const TempSpan = styled.a`
  display: inline-block;

  font-weight: 500;
  font-size: 7vw;
  margin: 0 20px;

  padding-top: 2px;

  text-decoration: none;

  color: black;
  &.red {
    background-color: #fe0000;
  }

  &.orange {
    background-color: #ff7900;
  }

  &.yellow {
    background-color: #ffff01;
  }

  &.green {
    background-color: #13dd17;
  }

  &.blue {
    background-color: #304fff;
  }

  &.indigo {
    background-color: #7b20a3;
  }

  &.violet {
    background-color: #d500fa;
  }
`;
