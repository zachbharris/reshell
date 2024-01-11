import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { NextTheme } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reshell",
  description: "Gameboy Customization tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full" suppressHydrationWarning>
      <body className={cn("h-full w-full", inter.className)}>
        <NextTheme>
          <Navbar />
          {children}
          <Toaster position="bottom-left" />
        </NextTheme>
      </body>
    </html>
  );
}
