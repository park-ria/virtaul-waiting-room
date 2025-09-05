import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <main className="min-h-screen px-7.5 bg-background overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
