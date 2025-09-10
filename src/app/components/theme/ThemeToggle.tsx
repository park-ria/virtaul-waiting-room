"use client";

import { useEffect } from "react";
import { darkState } from "@/recoil/themeAtom";
import { useRecoilState } from "recoil";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useRecoilState(darkState);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="px-4 py-2 rounded-lg border border-gray-300 bg-[var(--color-sidebar-bg)] text-[var(--color-font)]"
    >
      {isDark ? "라이트 모드" : "다크 모드"}
    </button>
  );
};
