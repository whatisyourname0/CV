import useFocus from "@hooks/useFocus";
import useIdle from "@hooks/useIdle";
import { Helmet, HelmetProvider } from "react-helmet-async";

function HeadConfig() {
  const isIdle = useIdle(2e3);
  const isFocused = useFocus();

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {isFocused && !isIdle ? "WhatIsYourName? - Portfolio" : "Zzz... 😴"}
        </title>
      </Helmet>
    </HelmetProvider>
  );
}

export default HeadConfig;
