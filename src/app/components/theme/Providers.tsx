"use client";

import { RecoilRoot } from "recoil";
import { ThemeProvider } from "./ThemeProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <ThemeProvider>{children}</ThemeProvider>
    </RecoilRoot>
  );
};
