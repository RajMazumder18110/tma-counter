/** @notice Imports */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/// Font
const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

/// Root metadata
export const metadata: Metadata = {
  title: "Counter | Telegram mini app",
  description: "A minimal counter telegram mini app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-black text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
