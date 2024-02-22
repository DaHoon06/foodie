import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const horizontalBarLayout = style({
  backgroundColor: vars.colors.white000,
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  margin: '0 auto',
  height: '50px',
  position: 'sticky',
  top: 97,
  zIndex: 1100
})

export const horizontalBarLists = style({
  display: 'flex',
  // ':-webkit-box-align': 'center',
  alignItems: 'center',
  position: 'relative',
  flex: '1 1 auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  overflow: 'auto hidden'
})


export const horizontalBarItems = style({
  padding: '0 0.5em',

  selectors: {
    '&:nth-child(1)': {
      marginLeft: '12px'
    }
  }
})
