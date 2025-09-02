import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Header />
      <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind!</h1>
    </div>
  );
}
