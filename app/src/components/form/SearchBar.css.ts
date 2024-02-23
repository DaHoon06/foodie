import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const searchInputLabel = style({
  position: "relative",
  display: "inline-block",
  width: "100%",
  height: 'auto',
  marginBottom: 20
})

export const searchInput = style({
  boxSizing: 'border-box',
  backgroundColor: vars.colors.backgroundColor,
  borderRadius: 10,
  border: `1px solid ${vars.colors.gray000}`,
  color: vars.colors.black500,
  width: '100%',
  height: 38,
  outline: 'none',
  padding: "0.2em 0.8em",

  selectors: {
    '&:focus': {
      borderColor: vars.colors.primary,
      backgroundColor: vars.colors.white000,
    },
    '&::-webkit-search-cancel-button': {
      position: 'relative',
      WebkitAppearance: 'none',
      height: 16,
      width: 16,
      borderRadius: 10,
      color: vars.colors.white000,
      background: "url('/images/x-icon.png') center center no-repeat",
      backgroundSize: '50%',
      backgroundColor: vars.colors.backgroundColor,
      cursor: 'pointer',
    },

  },
});