import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function titleCase(s: string) {
  return s.replace(/\b\w/g, (m) => m.toUpperCase());
}
