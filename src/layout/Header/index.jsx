import styled, { css } from "styled-components";
import useScroll from "@hooks/useScroll";
import { useEffect, useState } from "react";

const MENUS = ["About Me", "Projects", "Skills", "Blog", "Contact"];

function Header() {
  const { y } = useScroll();
  const [blurOffset, setBlurOffset] = useState(0);

  useEffect(() => {
    let vh = window.innerHeight;
    setBlurOffset(5 * Math.min(y / vh, 1));
  }, [y, blurOffset]);

  return (
    <Container blurOffset={blurOffset}>
      <Wrapper>
        <IconWrapper>
          <IconSpan blurOffset={blurOffset} className="FirstSpan">
            &lt;
          </IconSpan>
          <IconSpan blurOffset={blurOffset} className="SecondSpan">
            WIYN&nbsp;
          </IconSpan>
          <IconSpan blurOffset={blurOffset} className="ThirdSpan">
            /&gt;
          </IconSpan>
        </IconWrapper>
        <Menus>
          {MENUS.map((el, idx) => {
            return (
              <Menu key={idx}>
                <MenuContent>{el}</MenuContent>
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
      background-color: #1e1e1e4d;
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
      css`
        position: absolute;
        left: 20px;
      `}
  }

  &.SecondSpan {
    opacity: 1;

    ${(props) =>
      props.blurOffset !== 0 &&
      css`
        transform: scale(0);
        opacity: 0;
      `}
  }

  &.ThirdSpan {
    right: 0;

    ${(props) =>
      props.blurOffset !== 0 &&
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
  height: 100%;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

const MenuContent = styled.span`
  font-size: 18px;
`;
