import type { Metadata } from "next";
import { hostGrotesk } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | New Hope',
    default: 'New Hope Church of God',
  },
  description: "The official website of Church of God New Hope.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.className}`}>
        {children}
      </body>
    </html>
  );
}
