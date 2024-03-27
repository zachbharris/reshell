"use client";

import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import {
  GameboyOriginal,
  initialFill,
} from "@/components/Devices/GameboyOriginal";
import { useState } from "react";
import { SketchPicker } from "react-color";

export default function Home() {
  const [buttonB, setButtonB] = useState(initialFill.buttonB);
  return (
    <main className="flex flex-row w-full h-[calc(100%-60px)]">
      <div
        className={cn(
          "flex-grow flex flex-row items-center justify-center gap-8",
          "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
          "dark:bg-[radial-gradient(#171717_1px,transparent_1px)] [background-size:16px_16px]",
        )}
      >
        <SketchPicker color={buttonB} onChange={({ hex }) => setButtonB(hex)}  />
        <GameboyOriginal fill={{ buttonB }} />
      </div>
      <Sidebar />
    </main>
  );
}
