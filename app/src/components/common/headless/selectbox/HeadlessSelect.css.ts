import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const selectBox = style({
  position: 'relative',
  width: 200,
  padding: 8,
  borderRadius: 6,
  backgroundColor: vars.colors.white000,
  alignSelf: 'center',
  border: '1px solid #ededed',
  cursor: "pointer",

  selectors: {
    '&::before': {
      content: '⌵',
      position: 'absolute',
      top: 1,
      right: 8,
      color: vars.colors.black100,
      fontSize: 20
    }
  }
})

export const selectBoxOptions = style({
  position: 'absolute',
  listStyle: 'none',
  top: 30,
  left: 1,
  width: '100%',
  overflow: 'hidden',
  padding: 0,
  borderRadius: 8,
  backgroundColor: '#606060',
  color: '#fefefe'
})