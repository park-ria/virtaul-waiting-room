"use client";

import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { darkState } from "@/recoil/themeAtom";

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
