import "./globals.css";
import Providers from "./components/theme/Providers";

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
