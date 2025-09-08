"use client";

import { darkState } from "@/recoil/themeAtom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDark = useRecoilValue(darkState);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return <>{children}</>;
};
