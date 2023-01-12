import { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight) {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  return size;
}

export default useWindowSize;
