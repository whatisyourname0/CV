import useHover from "@hooks/useHover";
import useScroll from "@hooks/useScroll";
import { MENUS } from "@layout/misc";
import { focusedSectionAtom } from "@store/atoms";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import scrollIntoView from "scroll-into-view-if-needed";
import styled, { css } from "styled-components";

function Header({ sectionRefs }) {
  const { y } = useScroll();
  const [blurOffset, setBlurOffset] = useState(0);
  const [hoverRef, isHovered] = useHover();
  const focusedSection = useRecoilValue(focusedSectionAtom);

  useEffect(() => {
    let vh = window.innerHeight;
    setBlurOffset(5 * Math.min(y / vh, 1));
  }, [y, blurOffset]);

  const handleClickToScroll = (sec) => {
    scrollIntoView(sectionRefs.current[sec], {
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container blurOffset={blurOffset}>
      <Wrapper>
        <IconWrapper ref={hoverRef} onClick={scrollToTop}>
          <IconSpan
            blurOffset={blurOffset}
            isHovered={isHovered}
            className="FirstSpan"
          >
            &lt;
          </IconSpan>
          <IconSpan
            blurOffset={blurOffset}
            isHovered={isHovered}
            className="SecondSpan"
          >
            WIYN&nbsp;
          </IconSpan>
          <IconSpan
            blurOffset={blurOffset}
            isHovered={isHovered}
            className="ThirdSpan"
          >
            /&gt;
          </IconSpan>
        </IconWrapper>
        <Menus>
          {MENUS.map((menu, idx) => {
            return (
              <Menu
                key={idx}
                onClick={() => {
                  handleClickToScroll(menu);
                }}
                isFocused={idx === focusedSection}
              >
                <MenuContent>{menu}</MenuContent>
              </Menu>
            );
          })}
        </Menus>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.nav`
  width: 100%;
  height: 64px;

  position: fixed;
  top: 0;
  left: 0;

  background-color: transparent;
  color: white;

  z-index: 1000;

  box-sizing: border-box;
  border: none;
  backdrop-filter: ${(props) =>
    props.blurOffset !== 0 && `blur(${props.blurOffset}px)`};

  border-bottom: 1px solid transparent;

  transition: background-color 0.2s ease, height 0.55s ease,
    border-bottom 0.55s ease;
  ${(props) =>
    props.blurOffset !== 0 &&
    css`
      background-color: black;
      height: 50px;

      border-bottom-color: hsla(0, 0%, 100%, 0.2);
    `}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 0 15px;

  max-width: 1140px;
  height: 100%;
`;

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const IconSpan = styled.span`
  display: inline-block;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 24px;

  transform: scale(1);
  transform-origin: right bottom;
  transition: transform 0.2s ease, left 0.25s ease, right 0.25s ease,
    opacity 0.25s ease;

  &.FirstSpan {
    left: 0;

    ${(props) =>
      props.blurOffset !== 0 &&
      !props.isHovered &&
      css`
        position: absolute;
        left: 18px;
      `}
  }

  &.SecondSpan {
    opacity: 1;

    ${(props) =>
      props.blurOffset !== 0 &&
      !props.isHovered &&
      css`
        transform: scale(0);
        opacity: 0;
      `}
  }

  &.ThirdSpan {
    right: 0;
    ${(props) =>
      props.blurOffset !== 0 &&
      !props.isHovered &&
      css`
        position: absolute;
        right: 20px;
      `}
  }
`;

const Menus = styled.ul`
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
`;

const Menu = styled.li`
  min-width: 60px;
  height: 100%;

  padding: 0 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  cursor: pointer;
  color: white;

  &:after {
    position: absolute;
    content: "";
    bottom: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    mix-blend-mode: difference;

    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const MenuContent = styled.span`
  font-size: 18px;
`;
