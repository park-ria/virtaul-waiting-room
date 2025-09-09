import "./globals.css";
import dynamic from "next/dynamic";

// 클라이언트에서만 렌더
const Providers = dynamic(
  () => import("./components/theme/Providers").then((m) => m.Providers),
  { ssr: false }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <Providers>
          <main className="min-h-screen px-7.5 bg-background overflow-x-hidden">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
