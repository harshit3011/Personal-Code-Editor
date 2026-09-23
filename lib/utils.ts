// export { cn } from "cn"
import { clsx, type ClassValue } from "clsx"

function twMerge(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(...inputs)
}
