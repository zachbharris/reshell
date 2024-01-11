type Device = "gba" | "gbc" | "gb";

type DeviceProps = {
  side: "front" | "back";
};

export default function Device({ side }: DeviceProps) {
  return (
    <div className="relative flex flex-col min-w-56 min-h-96 rounded-md bg-accent shadow-xl">
      {side === "front" ? (
        <div className="max-w-full aspect-square bg-neutral-900 m-4 rounded-sm" />
      ) : (
        <div className="max-w-full h-20 rounded-sm mx-4 mb-4 mt-auto bg-neutral-200 dark:bg-neutral-700" />
      )}
    </div>
  );
}
