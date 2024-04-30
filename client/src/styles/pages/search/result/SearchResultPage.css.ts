import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const searchResultLayout = style({
  width: "100%",
  maxWidth: "428px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  marginLeft: "unset",
  marginRight: "unset",
  boxShadow: "0 0 16px rgb(50, 50, 50 / 12%)",
  padding: "1em 1.5em",
  backgroundColor: vars.colors.white000,

  "@media": {
    "screen and (max-width: 1024px)": {
      width: "466px",
    },
    "screen and (max-width: 480px)": {
      width: "100vw",
    },
  },
});

export const backButtonWrapper = style({
  width: "100%",
  height: 38,
  marginBottom: 10,
});
export const customResultPageBackButtonWrapper = style({
  width: "100%",
  height: 38,
  marginBottom: 10,
  display: "flex",
  justifyContent: 'space-between'
});

export const searchResultContainer = style({
  width: "100%",
  height: "100%",
});

export const itemThumbnail = style({
  borderRadius: 4,
  margin: "0 2px",
  objectFit: "cover",
  width: 124,
  height: "auto",
  minHeight: 96,

  selectors: {
    "&:nth-child(1)": {
      marginLeft: 0,
    },
    "&:last": {
      marginRight: 0,
    },
  },
});

