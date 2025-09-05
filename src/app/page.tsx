import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <h1 className="text-3xl font-bold text-blue-500">Hello</h1>
    </div>
  );
}
