import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const feedLocationLaoyout = style({
  width: "100%",
  height: "100%",
  paddingRight: "2em",
  paddingLeft: "2em",
  paddingTop: "2em",
  paddingBottom: "4em",
});

export const feedLocationContainer = style({
  width: "100%",
  height: "90%",
});

export const input = style({
  boxSizing: "border-box",
  backgroundColor: vars.colors.backgroundColor,
  borderRadius: 10,
  border: `1px solid ${vars.colors.gray000}`,
  color: vars.colors.black500,
  width: "100%",
  height: 38,
  outline: "none",
  padding: "0.2em 0.8em",

  selectors: {
    "&:focus": {
      borderColor: vars.colors.primary,
      backgroundColor: vars.colors.white000,
    },
  },
});
