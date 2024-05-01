import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const basicInputLayout = style({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: 10,
});

export const inputLayout = style({
  boxSizing: "border-box",
  backgroundColor: vars.colors.backgroundColor,
  borderRadius: 6,
  fontSize: 14,
  border: `1px solid ${vars.colors.gray000}`,
  color: vars.colors.black500,
  width: "100%",
  height: 38,
  outline: "none",
  padding: "0.2em 0.8em",

  selectors: {
    "&::placeholder": {
      fontWeight: 300,
      color: vars.colors.gray300,
    },
  },
});
