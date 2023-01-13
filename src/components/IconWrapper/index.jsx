import { IconContext } from "@react-icons/all-files";
import styled from "styled-components";

function IconWrapper({ link, icon, toastMessage, onClick }) {
  return (
    <Container onClick={onClick}>
      <IconContext.Provider
        value={{
          size: "35px",
          color: "white",
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div>{icon}</div>
        </a>
      </IconContext.Provider>
      <span>{toastMessage}</span>
    </Container>
  );
}

export default IconWrapper;

const Container = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  display: flex;
  justify-content: center;
  align-content: center;

  border-radius: 100px;

  cursor: pointer;
  background-color: transparent;

  outline: none;
  appearance: none;

  a {
    text-decoration: none;
    color: black;
  }

  span {
    visibility: hidden;
    position: absolute;
    left: 50%;
    bottom: 100%;
    opacity: 0;
    margin-bottom: 10px;
    padding: 10px;

    color: black;
    background-color: white;

    font-size: 16px;
    line-height: 0.75;
    text-align: left;
    white-space: nowrap;
    transform: translate(-50%, 1em);
    transition: all 0.15s ease-in-out;
    border-radius: 10%;

    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      width: 0;
      height: 0;
      border: 0.5em solid transparent;
      border-top-color: white;
      transform: translate(-50%, -10%);
    }
  }

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, -10%);
    }
  }
`;
