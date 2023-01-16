import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
  damping: 0.1,
  renderByPixels: true,
  alwaysShowTracks: true,
};

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) {
        Scrollbar.destroy(document.body);
      }
    };
  }, []);

  return null;
};

export default SmoothScroll;
