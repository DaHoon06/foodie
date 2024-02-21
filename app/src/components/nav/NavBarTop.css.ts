import {style} from '@vanilla-extract/css';

export const navBarTopLayout = style({
  backgroundColor: '#fff',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  margin: '0 auto',
  height: '50px',
  borderBottom: '1px solid rgb(238,238,238)',
  maxWidth: '428px',
  position: 'fixed',
  top: '48px',
  zIndex: 1100
})

export const navBarTopLists = style({
  display: 'flex',
  // ':-webkit-box-align': 'center',
  alignItems: 'center',
  position: 'relative',
  flex: '1 1 auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  overflow: 'auto hidden'
})


export const navBarTopItems = style({
  padding: '0 0.5em',

  selectors: {
    '&:nth-child(1)': {
      marginLeft: '12px'
    }
  }
})