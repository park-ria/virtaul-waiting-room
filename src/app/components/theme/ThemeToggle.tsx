"use client";

import { useRecoilState } from "recoil";
import { themeState } from "@/recoil/themeAtom";

export const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  console.log("111");
  console.log(theme);

  return <div>button</div>;
};
