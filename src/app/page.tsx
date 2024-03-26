'use client'

import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import * as DMG from "@/components/Devices/GameboyOriginal"

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
        <DMG.FrontShell>
          <DMG.ScreenProtector x="20" y="41" />
          <DMG.Screen x="65" y="63" />
          <DMG.Button x="228" y="287" />
          <DMG.Button x="181" y="308" />
          <DMG.DPad x="22.5" y="287" />
          <DMG.MenuButton x="85" y="375" />
          <DMG.MenuButton x="134" y="375" />
          <DMG.SpeakerVent x="177" y="370" />
        </DMG.FrontShell>
      </div>
      <Sidebar />
    </main>
  );
}
