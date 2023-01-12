import { useEffect, useState } from "react";

const useScroll = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
    xRatio: 0,
    yRatio: 0,
  });

  const handleScroll = () => {
    setPos({
      y: window.scrollY,
      x: window.scrollX,
      yRatio: window.scrollY / window.innerHeight,
      xRadio: window.scrollX / window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return pos;
};

export default useScroll;
