import HeadingContainer from "@components/HeadingContainer";
import SwiperCard from "@components/SwiperCard";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

import "swiper/css/bundle";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { useSetRecoilState } from "recoil";
import { focusedSectionAtom } from "@store/atoms";

function ProjectSection({ sectionRefs }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, { threshold: 0.9 });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  useEffect(() => {
    if (sectionEntry?.intersectionRatio > THRESHOLD) {
      setFocusedSection(1);
    }
  }, [sectionEntry, setFocusedSection]);

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Projects: el };
        scrollRef.current = el;
      }}
    >
      <HeadingContainer writeups="Projects" />
      <ProjectContainer>
        <Spell>Everyone can spell the code,</Spell>
        <Spell>But not everyone can write the quality.</Spell>
        <SwiperWrapper>
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={60}
            slidesPerView={2}
            centeredSlides={true}
            navigation={{
              prevEl: navigationPrevRef,
              nextEl: navigationNextRef,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
            {Array(10)
              .fill()
              .map((el, idx) => {
                return idx;
              })
              .map((el, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <SwiperCard key={idx} number={idx} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <PrevButton ref={navigationPrevRef} />
          <NextButton ref={navigationNextRef} />
        </SwiperWrapper>
      </ProjectContainer>
    </Container>
  );
}

export default ProjectSection;

const Container = styled.section`
  width: 100%;
`;

const ProjectContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Spell = styled.span`
  display: block;

  margin-bottom: 20px;

  font-family: "Open Sans";
  font-size: 28px;
  font-weight: 500;
`;

const SwiperWrapper = styled.div`
  width: 100%;
  margin: 50px 0;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrevButton = styled.button`
  width: 50px;
  height: 50px;

  position: absolute;

  top: 50%;
  left: 50px;

  z-index: 500;
`;

const NextButton = styled.button`
  width: 50px;
  height: 50px;

  position: absolute;

  top: 50%;
  right: 50px;

  z-index: 500;
`;
