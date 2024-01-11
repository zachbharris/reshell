import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-row w-full h-[calc(100%-60px)]">
      <div className="flex-grow">stuff will go here</div>
      <Sidebar />
    </main>
  );
}
