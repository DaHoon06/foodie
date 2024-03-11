import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const feedListsTitle = style({
  width: "100%",
  backgroundColor: vars.colors.white000,
  position: "sticky",
  top: 0,
  left: 0,
  borderBottom: "1px solid #f5f5f5",
  padding: "0 2em",
});

export const feedListsLayout = style({
  width: "100%",
  height: "100%",
  backgroundColor: vars.colors.backgroundColor,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: "8px 0",
});

export const postLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  height: "100%",
});

export const postBodyContainer = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  padding: "1em",
  borderBottom: "1px solid #f5f5f5",
});

export const postOptionContainer = style({
  height: "60px !important",
  padding: "0.5em 1.25em",
  backgroundColor: vars.colors.white000,
});

export const imagesContainer = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
});
