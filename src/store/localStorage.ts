import { Theme } from "@/hooks/useTheme"

abstract class Registry {
  static getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key)
    return item as T | null
  }
  static setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }
}

export class appLocalStorage {
  static key = "theme"

  public static getTheme = () => {
    return Registry.getItem<Theme>(this.key)
  }

  public static setTheme = (theme: Theme) => {
    return Registry.setItem(this.key, theme)
  }
}
