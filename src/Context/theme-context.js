import React from "react";

export const themes = {
  light: {
    forceground: '#000',
    background: '#eee'
  },
  dark: {
    forceground: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.dark);