import "./globals.css";
import ThemeProviders from "./components/theme/ThemeProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <ThemeProviders>
          <main className="min-h-screen px-7.5 bg-background overflow-x-hidden">
            {children}
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}
