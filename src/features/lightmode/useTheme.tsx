import React, { createContext, useContext, useEffect, useState } from "react"
import { THEME_COLORS } from "../../../global-style"

export type Theme = "dark" | "light"

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}
// https://kentcdodds.com/blog/how-to-use-react-context-effectively#typescript
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark")

  // useEffect(() => {
  //   const root = window.document.documentElement

  //   const initialTheme = root.style.getPropertyValue("--initial-theme") as Theme
  //   console.log(initialTheme)

  //   setTheme(initialTheme)
  // }, [])

  useEffect(() => {
    setCustomProperties(theme, THEME_COLORS)
  }, [theme])

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme("dark")
    } else {
      throw new Error("theme has to be either dark or light")
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

type ThemeColors = {
  light: {
    [colorName: string]: string
  }
  dark: {
    [colorName: string]: string
  }
}

function setCustomProperties(targetTheme: Theme, themeColors: ThemeColors) {
  const root = window?.document.documentElement

  Object.entries(themeColors[targetTheme]).forEach(
    ([cssVarName, colorValue]) => {
      root.style.setProperty(cssVarName, colorValue)
    }
  )
}
