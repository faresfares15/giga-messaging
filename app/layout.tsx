import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giga Messaging",
  description: "Only for Gs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden overscroll-none m-0 font-inter flex">
        <SideBar />
        {children}
      </body>
    </html>
  );
}
