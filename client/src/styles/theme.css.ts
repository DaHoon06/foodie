import {createGlobalTheme} from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: "#FF7101",
    black000: '#000000',
    black100: '#222222',
    black500: '#555555',
    white000: '#ffffff',
    gray000: '#ededed',
    gray300: '#c0c0c0',
    gray400: '#9e9e9e',
    gray500: '#656565',
    backgroundColor: '#f5f5f5',
  }
})

export const primaryIconColor = '#FF7101' as const;
