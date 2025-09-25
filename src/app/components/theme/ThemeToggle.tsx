"use client";

import { useRecoilState } from "recoil";
import { darkState } from "@/recoil/themeAtom";
import { useEffect } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useRecoilState(darkState);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button onClick={() => setIsDark((prev) => !prev)}>
      {isDark ? "Light" : "Dark"} Mode
    </button>
  );
};
