import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header
      className={cn(
        "flex flex-row px-4 h-[60px] border-b border-border gap-4 items-center justify-between",
      )}
    >
      <Link href="/" className="font-bold">
        Reshell
      </Link>
      <nav className="flex flex-row flex-1 gap-4 justify-center">
        <Link href="/about">About</Link>
        <Link href="/about">Feedback</Link>
      </nav>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
