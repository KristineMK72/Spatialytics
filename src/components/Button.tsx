import Link from "next/link";
import { cn } from "@/lib/utils";

type Props =
  | { href: string; children: React.ReactNode; variant?: "primary" | "ghost"; className?: string }
  | { onClick: () => void; children: React.ReactNode; variant?: "primary" | "ghost"; className?: string };

export default function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-semibold transition border";
  const variant = props.variant ?? "primary";
  const styles =
    variant === "primary"
      ? "glass border-white/15 hover:bg-white/10"
      : "border-white/10 bg-white/0 hover:bg-white/5 text-white/80 hover:text-white";

  const cls = cn(base, styles, props.className);

  if ("href" in props) {
    return (
      <Link href={props.href} className={cls}>
        {props.children}
      </Link>
    );
  }
  return (
    <button onClick={props.onClick} className={cls}>
      {props.children}
    </button>
  );
}
