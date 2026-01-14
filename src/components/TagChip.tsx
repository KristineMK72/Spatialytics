import { cn } from "@/lib/utils";

export default function TagChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 rounded-2xl text-xs border transition",
        active
          ? "glass border-white/20 text-white"
          : "border-white/10 text-white/70 hover:text-white hover:bg-white/5"
      )}
    >
      {label}
    </button>
  );
}
