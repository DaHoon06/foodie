import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const feedDetailTitle = style({
  width: "100%",
  backgroundColor: vars.colors.white000,
  position: "sticky",
  top: 0,
  left: 0,
  borderBottom: "1px solid #dddddd",
  padding: '0 20px'
});

export const feedListsLayout = style({
  width: "100%",
  height: "100%",
  backgroundColor: vars.colors.backgroundColor,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: 0,
});
