import Device from "@/components/Devices";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-row w-full h-[calc(100%-60px)]">
      <div
        className={cn(
          "flex-grow flex flex-row items-center justify-center gap-8",
          "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
          "dark:bg-[radial-gradient(#171717_1px,transparent_1px)] [background-size:16px_16px]",
        )}
      >
        <Device side="front" />
        <Device side="back" />
      </div>
      <Sidebar />
    </main>
  );
}
