import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={cn("mt-14 md:mt-20", className)}>{children}</section>;
}
