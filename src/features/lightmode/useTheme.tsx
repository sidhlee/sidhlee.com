import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | undefined

const ThemeContext = createContext<{
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}>({
  theme: undefined,
  setTheme: () => {},
})

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(undefined)

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

  return [theme, setTheme] as const
}
