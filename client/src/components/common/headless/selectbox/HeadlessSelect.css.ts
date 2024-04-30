import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const selectBox = style({
  position: 'relative',
  width: "fit-content",
  padding: 8,
  borderRadius: 6,
  backgroundColor: vars.colors.white000,
  alignSelf: 'center',
  cursor: "pointer",
  color: vars.colors.black100,

  selectors: {
    '&::before': {
      content: '⌵',
      position: 'absolute',
      top: 4,
      right: -8,
      color: vars.colors.gray400,
      fontSize: 18
    }
  }
})

export const selectBoxOptions = style({
  position: 'absolute',
  listStyle: 'none',
  top: 26,
  left: 4,
  width: 70,
  overflow: 'hidden',
  padding: 0,
  borderRadius: 4,
  backgroundColor: '#606060',
  color: '#fefefe'
})

export const selectBoxOption = style({
  fontSize: 14,
  padding: '6px 8px',
  transition: 'background-color 0.2s ease-in',
  textAlign: 'center',
  borderBottom: '1px solid #6a6a6aa3',

  selectors: {
    '&:last-child': {
      borderColor: 'transparent'
    }
  }
})
