import styled from "styled-components";

function Bubble({ isContactOpen }) {
  return (
    <BubbleContainer onClick={() => {}} isContactOpen={isContactOpen}>
      <Title>Let's Talk</Title>
      <Wrapper>
        <Desc>Feel free to send email via </Desc>
        <EmailWrapper
          href={`mailto:mynameisjune111@gmail.com?subject=hello&body=Sending Email to Junho Lee&nbsp;(whatisyourname0)`}
        >
          mynameisjune111@gmail.com
        </EmailWrapper>
      </Wrapper>
    </BubbleContainer>
  );
}

export default Bubble;

const BubbleContainer = styled.div`
  width: 70vw;
  height: 45vh;

  margin-bottom: 3vh;
  padding: 3vh 6vw;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;

  position: relative;
  z-index: 100;

  background-color: black;
  color: white;
  border-radius: 2vw;

  transform-origin: bottom center;
  transform: ${(props) => (props.isContactOpen ? "scale(100%)" : "scale(0%)")};
  transition: transform 0.2s ease-in;

  &::before {
    content: "";
    width: 0;
    height: 0;

    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;

    border: 20px solid transparent;
    border-top-color: black;
    border-left-color: black;
  }
`;

const Title = styled.div`
  width: 100%;

  font-size: 6vw;
`;

const Desc = styled.div`
  width: 100%;
  padding-top: 3%;

  font-size: 3vw;
  font-weight: 300;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const EmailWrapper = styled.a`
  display: block;

  text-decoration: none;
  color: white;
  cursor: default;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 5vw;

  &:hover {
    text-decoration: underline;
  }
`;
