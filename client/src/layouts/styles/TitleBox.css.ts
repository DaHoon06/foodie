import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const titleBoxLayout = style({
  width: "100%",
  backgroundColor: vars.colors.white000,
  position: "sticky",
  top: 0,
  left: 0,
  borderBottom: "1px solid #dddddd",
  padding: "0 1em",
  zIndex: 99,
});
