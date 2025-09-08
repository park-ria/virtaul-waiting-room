"use client";

import { Providers } from "./components/theme/Providers";
import { Header } from "./components/header";
import { ThemeToggle } from "./components/theme/ThemeToggle";

export default function Home() {
  return (
    <Providers>
      <div className="flex flex-col">
        <Header />
        <ThemeToggle />
      </div>
    </Providers>
  );
}
