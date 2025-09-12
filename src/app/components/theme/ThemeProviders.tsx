"use client";

import { RecoilRoot } from "recoil";

export default function ThemeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
