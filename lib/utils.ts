import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface DemoMethod {
  demoComponent: (direction: string) => string | { parent: string; child: string };
}

// Helper function to get demo styles from a method
export function getDemoStyles(method: DemoMethod, direction: string) {
  const result = method.demoComponent(direction);
  if (typeof result === "string") {
    return { parent: result, child: "" };
  }
  return result;
}

interface CodeMethod extends DemoMethod {
  horizontalCode?: string;
  verticalCode?: string;
  bothCode?: string;
}

export function getCode(method: CodeMethod, direction: string) {
  if (direction === "horizontal") {
    return method.horizontalCode || "";
  } else if (direction === "vertical") {
    return method.verticalCode || "";
  } else {
    return method.bothCode || "";
  }
}