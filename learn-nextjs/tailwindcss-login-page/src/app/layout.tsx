import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind CSS Login Page",
  description: "Tailwind CSS Login Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex gap-4 p-4 bg-gray-300">
          <Link href={"/"}>Home</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
