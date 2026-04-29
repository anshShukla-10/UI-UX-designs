import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "WAO Gym | Chandigarh's Premium Fitness Community",
  description: "A premium fitness community in Chandigarh designed to make your journey fun and social.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased bg-darkbg text-white`}>
        {children}
      </body>
    </html>
  );
}
