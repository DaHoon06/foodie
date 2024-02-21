import {createGlobalTheme} from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
  colors: {
    black000: '#000000',
    black100: '#222222',
    white000: '#ffffff',
    gray000: '#ededed',
    backgroundColor: '#f5f5f5',
  }
})