"use client";

import { Header } from "./components/header";
import { ThemeToggle } from "./components/theme/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <ThemeToggle />
    </div>
  );
}
