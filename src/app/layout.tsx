import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Derek Yendoh - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=https://www.derekyendoh.dev/" />
        <script dangerouslySetInnerHTML={{ __html: `window.location.href = "https://www.derekyendoh.dev/"` }} />
      </head>
      <body>
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
          <p>Redirecting to <a href="https://www.derekyendoh.dev/">https://www.derekyendoh.dev/</a>...</p>
        </div>
        <div style={{ display: 'none' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
