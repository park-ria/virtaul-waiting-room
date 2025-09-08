"use client";

import { darkState } from "@/recoil/themeAtom";
import { useRecoilState } from "recoil";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useRecoilState(darkState);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="px-4 py-2 rounded bg-main"
    >
      dark mode
    </button>
  );
};
