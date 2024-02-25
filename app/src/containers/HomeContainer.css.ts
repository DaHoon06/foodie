import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const homeContainerLayout = style({
  width: '100%',
  maxWidth: '428px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 'unset',
  marginRight: 'unset',
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  boxShadow: '0 0 16px rgb(50, 50, 50 / 12%)',

  '@media': {
    'screen and (max-width: 1024px)': {
      width: '466px',
    },
    'screen and (max-width: 480px)': {
      width: "100vw",
    }
  }
})

export const homeListsFilterContainer = style({
  position: "sticky",
  width: '100%',
  height: 48,
  top: 49,
  backgroundColor: vars.colors.white000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1em',
  zIndex: 99
})

export const filterButton = style({
  border: `1px solid ${vars.colors.gray000}`,
  borderRadius: 20,
  padding: "0.25em 0.6em"
})

export const filterLists = style({
  position: 'sticky',
  top: 97
})
