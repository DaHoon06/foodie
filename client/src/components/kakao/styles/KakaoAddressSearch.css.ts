import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const kakaoSearchLabelWrapper = style({
  width: "100%",
  height: "100%",
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

export const searchModalLayout = style({
  display: "none",
  position: "fixed",
  zIndex: "20000",
  left: "25%",
  width: "50%",
  padding: 20,
  border: "1px solid #333",
  backgroundColor: "white",
  borderRadius: 20
})
