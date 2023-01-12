import { css } from "styled-components";

export const customScrollbar = css`
  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgb(180, 180, 180);
    :hover {
      background-color: rgb(150, 150, 150);
    }
    :active {
      background-color: rgb(120, 120, 120);
    }
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;
