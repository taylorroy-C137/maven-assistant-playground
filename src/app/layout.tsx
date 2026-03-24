import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maven Prototype Playground",
  description: "A playground for viewing and building Maven prototypes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
