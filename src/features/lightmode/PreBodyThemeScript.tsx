import { Theme } from "./useTheme"

const PreBodyThemeScript = () => {
  let codeToRunOnClient = `
  
  `
}

;(function () {
  const COLORS = {}

  function getInitialTheme(): Theme {
    const persistedThemePreference = window.localStorage.getItem("theme")
    const hasPersistedThemePreference =
      typeof persistedThemePreference === "string"

    // If we have theme set in localStorage
    if (hasPersistedThemePreference) {
      return persistedThemePreference as Theme
    }

    // otherwise, use dark theme by default
    return "dark"
  }

  const theme = getInitialTheme()

  const root = document.documentElement
})()
