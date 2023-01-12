import styled from "styled-components";

function ErrorPage404() {
  return (
    <Container>
      <AsciiArtWrapper>{ASCII404}</AsciiArtWrapper>
      <Desc>This page does not exist;</Desc>
      <Desc>¯\_(ツ)_/¯</Desc>
      <a href="/" target="_self">
        <GoToMainSpan>Go to Main</GoToMainSpan>
      </a>
    </Container>
  );
}

export default ErrorPage404;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;
  gap: 5em;
  font-family: "Courier New", Courier, monospace;
`;

const AsciiArtWrapper = styled.pre`
  font-size: 14px;
  color: white;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
`;

const Desc = styled.span`
  font-size: 38px;
  color: white;
`;

const GoToMainSpan = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

const ASCII404 = [
  "      444444444            000000000                 444444444  ",
  "      4::::::::4          00:::::::::00              4::::::::4  ",
  "     4:::::::::4        00:::::::::::::00           4:::::::::4  ",
  "    4::::44::::4       0:::::::000:::::::0         4::::44::::4  ",
  "   4::::4 4::::4       0::::::0   0::::::0        4::::4 4::::4 ",
  "  4::::4  4::::4       0:::::0     0:::::0       4::::4  4::::4  ",
  " 4::::4   4::::4       0:::::0     0:::::0      4::::4   4::::4  ",
  "4::::444444::::444     0:::::0 000 0:::::0     4::::444444::::444",
  "4::::::::::::::::4     0:::::0 000 0:::::0     4::::::::::::::::4",
  "4444444444:::::444     0:::::0     0:::::0     4444444444:::::444",
  "          4::::4       0:::::0     0:::::0               4::::4  ",
  "          4::::4       0::::::0   0::::::0               4::::4  ",
  "          4::::4       0:::::::000:::::::0               4::::4  ",
  "        44::::::44      00:::::::::::::00              44::::::44",
  "        4::::::::4        00:::::::::00                4::::::::4",
  "        4444444444          000000000                  4444444444",
].join("\n");
