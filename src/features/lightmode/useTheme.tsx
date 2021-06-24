import React, { createContext, useContext, useEffect, useState } from "react"

export type Theme = "dark" | "light"

const ThemeContext = createContext<{
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}>({
  theme: "dark",
  setTheme: () => {},
})

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const root = window.document.documentElement

    const initialTheme = root.style.getPropertyValue("--initial-theme") as Theme

    setTheme(initialTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext)

  return { theme, setTheme }
}

type ThemeColors = {
  light: {
    [colorName: string]: string
  }
  dark: {
    [colorName: string]: string
  }
}

export function setCustomProperties(
  targetTheme: Theme,
  themeColors: ThemeColors
) {
  const root = window.document.documentElement

  Object.entries(themeColors[targetTheme]).forEach(
    ([cssVarName, colorValue]) => {
      root.style.setProperty(cssVarName, colorValue)
    }
  )
}
