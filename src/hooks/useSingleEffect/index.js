import { useEffect } from "react";

const useSingleEffect = (effect) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};

export default useSingleEffect;
