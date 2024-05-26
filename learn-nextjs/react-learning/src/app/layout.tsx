import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Learning",
  description: "| React Learning",
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
          <Link href={"/rendering-list"}>Rendering List</Link>
          <Link href={"/updating-screen"}>Updating Screen</Link>
          <Link href={"/thining-in-react"}>Thinking in React</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/state-as-snapshot"}>State as Snapshot</Link>
          <Link href={"/useeffect"}>useEffect</Link>
        </div>
        {children}
        </body>
    </html>
  );
}
