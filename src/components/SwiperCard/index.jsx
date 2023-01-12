import styled from "styled-components";

function SwiperCard({ number }) {
  return <Container>Slide Number : {number}</Container>;
}

export default SwiperCard;

const Container = styled.div`
  width: 500px;
  height: 300px;

  background-color: #aeaee5;
`;
