import styled from "styled-components";

function Bubble({ isContactOpen }) {
  return (
    <BubbleContainer onClick={() => {}} isContactOpen={isContactOpen}>
      <Title>Let's Talk.</Title>
      <Desc>
        Feel free sending email or get resume at&nbsp;
        <ExtLink download={true} href="/favicon.ico">
          here
        </ExtLink>
      </Desc>
      <EmailWrapper
        href={`mailto:mynameisjune111@gmail.com?subject=hello&body=Sending Email to Junho Lee&nbsp;(whatisyourname0)`}
      >
        mynameisjune111@gmail.com
      </EmailWrapper>
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
  justify-content: flex-start;
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
`;

const ExtLink = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const EmailWrapper = styled.a`
  display: block;
  flex-grow: 1;

  text-decoration: none;
  color: white;
  cursor: default;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5vw;

  &:hover {
    text-decoration: underline;
  }
`;
