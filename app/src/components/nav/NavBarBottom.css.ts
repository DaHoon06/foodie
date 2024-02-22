import {style} from '@vanilla-extract/css';
import {vars} from "@styles/theme.css";

export const navBarBottomLayout = style({
  position: "sticky",
  bottom: '0',
  width: '100%',
  maxWidth: 428,
  display: 'flex',
  alignItems: 'center',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  height: 64,
  zIndex: 1100,
});
export const navBarBottomContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
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

export const navBarLeftBox = style({
  display: "flex",
  backgroundColor: vars.colors.white000,
  width: "50%",
  height: "100%",
  borderRadius: " 0 45px 0 0",
  borderTop: '1px solid #ededed',
  justifyContent: 'center',
  gap: 30
})

export const navBarCenterBox = style({
  position: 'relative',
  height: '100%',
  right: 30,
  bottom: 16,
  backgroundColor: vars.colors.white000,
});

export const navBarCenterButton = style({
  position: 'absolute',
  backgroundColor: vars.colors.primary,
  width: 60,
  height: '100%',
  borderRadius: '50%',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.2)",
  zIndex: 99
})

export const navBarRightBox = style({
  display: "flex",
  backgroundColor: vars.colors.white000,
  width: "50%",
  height: "100%",
  borderRadius: "45px 0 0 0",
  borderTop: '1px solid #ededed',
  justifyContent: 'center',
  gap: 30
})