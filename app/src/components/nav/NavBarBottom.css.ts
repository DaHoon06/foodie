import {style} from '@vanilla-extract/css';

export const navBarBottomLayout = style({
  position: "fixed",
  bottom: '0',
  width: '100%',
  maxWidth: 428,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderTop: '1px solid #ededed',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  height: 64,
  zIndex: 1100,
});
export const navBarBottomContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const navBarBottomLists = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12

})
export const navBarBottomItems = style({
  padding: '0 0.5em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: 'center'
})