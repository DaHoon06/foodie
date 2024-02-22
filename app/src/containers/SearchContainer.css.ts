import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const searchContainerLayout = style({
  width: '100%',
  maxWidth: '428px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 'unset',
  marginRight: 'unset',
  boxShadow: '0 0 16px rgb(50, 50, 50 / 12%)',
  padding: '1em 1.5em',

  '@media': {
    'screen and (max-width: 1024px)': {
      width: '466px',
    },
    'screen and (max-width: 480px)': {
      width: "100vw",
    }
  }
})

export const backButtonWrapper = style({
  width: '100%',
  height: 38,
  marginBottom: 10
})

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
    }
  },
});

export const recentSearchKeywordItems = style({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1em 0'
})

