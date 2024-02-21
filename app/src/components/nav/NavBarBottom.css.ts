import {style} from '@vanilla-extract/css';
import {vars} from "@styles/theme.css";

export const navBarBottomLayout = style({
  position: "fixed",
  bottom: '0',
  width: '100%',
  maxWidth: 428,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: vars.colors.white000,
  borderTop: '1px solid #ededed',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  height: 64,
  zIndex: 1100,
});
export const navBarBottomContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
})

export const navBarBottomLists = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: 12,
  width: '100%',
})
export const navBarBottomItems = style({
  padding: '0 0.5em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: 'center'
})