import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CenteringMethod, CenteringDirection } from "./center-data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get demo styles from a method
export function getDemoStyles(method: CenteringMethod, direction: CenteringDirection) {
  const result = method.demoComponent(direction);
  if (typeof result === "string") {
    return { parent: result, child: "" };
  }
  return result;
}

export function getCode(method: CenteringMethod, direction: CenteringDirection) {
  if (direction === "horizontal") {
    return method.horizontalCode || "";
  } else if (direction === "vertical") {
    return method.verticalCode || "";
  } else {
    return method.bothCode || "";
  }
}