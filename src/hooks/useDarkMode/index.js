import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const darkModeAtom = atom({
  key: "darkMode",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export function useDarkMode() {
  const [isInitial, setIsInitial] = useState(true);
  const [darkModeStored, setDarkModeStored] = useRecoilState(darkModeAtom);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial === true ? false : darkModeStored, setDarkModeStored];
}
