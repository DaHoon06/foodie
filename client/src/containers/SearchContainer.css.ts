import {style} from "@vanilla-extract/css";

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

export const recentSearchKeywordItems = style({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1em 0'
})

