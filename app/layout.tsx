import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ofek Cofman - Software Developer",
  description: "Software Developer and former Team Leader in Unit 8200, specializing in .NET, C#, and distributed systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

