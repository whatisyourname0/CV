import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

function Carousal() {
  const arr = ["quality.", "motion.", "logic.", "world."];

  const options = {
    autoPlay: true,
    axis: "vertical",
    interval: 5000,
    transitionTime: 500,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    stopOnHover: false,
    swipeable: false,
    showThumbs: false,
    dynamicHeights: true,
  };

  return (
    <Container>
      <Carousel {...options}>
        {arr.map((el, idx) => {
          return (
            <Span key={idx} transformOffset={idx}>
              {el}
            </Span>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Carousal;

const Container = styled.div`
  width: 14vw;

  overflow: hidden;
  position: relative;

  padding: 0 5px;

  background-color: beige;
  color: black;
`;

const Span = styled.span``;