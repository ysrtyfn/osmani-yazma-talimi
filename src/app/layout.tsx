import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/unsurlar/globals.css";
import { cn } from "@/nuve/aletler/tasnifci";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osmani Yazma Talimi",
  description:
    "Osmanlı Türkçesi ile yazmayı talim etmek için sahife hazırlamağa yarar programdır.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen")}>{children}</body>
    </html>
  );
}
