import {style} from "@vanilla-extract/css";

export const appLandingLayout = style({
  display: 'flex',
  flexDirection: "column",
  justifyContent: "center",
  position: 'sticky',
  top: '0px',
  height: '100vh',
  width: "auth",

  '@media': {
    "screen and (max-width: 1024px)": {
      display: "none",
    },
    "screen and (min-width: 1025px)": {
      display: "flex",
    }
  }
});

export const appLandingContainer = style({
  width: '300px',
  height: '100%',
  border: '1px solid black'
})