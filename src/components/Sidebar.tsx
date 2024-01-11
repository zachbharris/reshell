"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type Item =
  | {
    type: "accordion";
    children: {
      id: string;
      title: string;
      content: React.ReactNode;
    }[];
  }
  | {
    type: "select";
    name: string,
    options: {
      label: string;
      value: string;
    }[];
  };

const items: Item[] = [
  {
    type: "select",
    name: "console",
    options: [
      { label: "Gameboy Color", value: "gbc" },
      { label: "Gameboy Advance", value: "gba" },
    ],
  },
  {
    type: "accordion",
    children: [
      { id: "front-shell", title: "Front Shell", content: "Hello World" },
      { id: "back-shell", title: "Back Shell", content: "Hello World" },
      { id: "buttons", title: "Buttons", content: "Hello World" },
      { id: "screen-border", title: "Screen Border", content: "Hello World" },
      { id: "screen-type", title: "Screen Type", content: "Hello World" },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col border-l border-border flex-grow w-full max-w-[320px] min-w-[240px]">
      {items.map((item) => {
        switch (item.type) {
          case "accordion": {
            return (
              <Accordion type="single">
                {item.children.map((child) => (
                  <AccordionItem key={child.id} value={child.id}>
                    <AccordionTrigger className="px-4">{child.title}</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">{child.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            );
          }
          case "select": {
            return (
              <div className="p-4 border-b">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select console" />
                  </SelectTrigger>
                  <SelectContent>
                    {item.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )
          }
        }
      })}

      <div className="flex items-center justify-center p-4 mt-auto">
        <Button className="w-full">Save image as PNG</Button>
      </div>
    </aside>
  );
}
