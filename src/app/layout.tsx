import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maven Consumer Playground",
  description: "Prototype playground for Maven Consumer and Assistant experiences",
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
