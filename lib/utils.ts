import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get demo styles from a method
export function getDemoStyles(method: any, direction: string) {
  const result = method.demoComponent(direction)
  if (typeof result === "string") {
    return { parent: result, child: "" }
  }
  return result
}

// Helper function to get code based on direction
export function getCode(method: any, direction: string) {
  if (direction === "horizontal") {
    return method.horizontalCode
  } else if (direction === "vertical") {
    return method.verticalCode
  } else {
    return method.bothCode
  }
}