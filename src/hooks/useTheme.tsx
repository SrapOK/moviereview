import { useEffect, useRef, useState } from "react"
import { appLocalStorage } from "store/localStorage"

export enum Theme {
  dark = "dark",
  light = "fantasy"
}

const updateDataTheme = (theme: Theme) => {
  document
    .getElementsByTagName("html")
    .item(0)
    ?.setAttribute("data-theme", theme)
}

const defaultTheme = Theme.dark

const useTheme = () => {
  const [theme, setTheme] = useState(
    appLocalStorage.getTheme() || defaultTheme
  )
  const isFirstRender = useRef(true)

  const toggleTheme = () => {
    if (theme === Theme.light) setTheme(Theme.dark)
    else return setTheme(Theme.light)
  }

  useEffect(() => {
    const savedTheme = appLocalStorage.getTheme()

    if (isFirstRender.current) {
      isFirstRender.current = false
      if (savedTheme) {
        updateDataTheme(savedTheme)
      }
    } else {
      if (savedTheme !== theme) {
        appLocalStorage.setTheme(theme)
        updateDataTheme(theme)
      }
    }
  }, [theme])

  return { theme, toggleTheme }
}

export default useTheme
