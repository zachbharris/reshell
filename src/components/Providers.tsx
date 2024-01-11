"use client";

import { ThemeProvider } from "next-themes";

export function NextTheme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
