import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function forceThemeColor(color: string, timeout: number = 0) {
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
  }, timeout)
}

export function resetThemeColor(timeout: number = 0) {
  setTimeout(() => {
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: light)"]'
      )
      ?.setAttribute('content', '#F4F4F5')
    document
      .querySelector(
        'meta[name="theme-color"][media="(prefers-color-scheme: dark)"]'
      )
      ?.setAttribute('content', '#18181B')
  }, timeout)
}
