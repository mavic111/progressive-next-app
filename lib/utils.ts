import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function forceThemeColor(color: string) {
  setTimeout(() => {
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: light)"]'
      )
      ?.setAttribute('content', color)
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: dark)"]'
      )
      ?.setAttribute('content', color)
  }, 300)
}

export function resetThemeColor() {
  setTimeout(() => {
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: light)"]'
      )
      ?.setAttribute('content', "#FFFFFF")
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: dark)"]'
      )
      ?.setAttribute('content', "#09090B")
  }, 300)
}
