import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

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
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyItems: "center",
  gap: 6,
  marginBottom: 40,
});

export const images = style({
  objectFit: "cover",
  width: "100%",
  height: "100%",
});


export const feedListsTitle = style({
  width: "100%",
  backgroundColor: vars.colors.white000,
  position: "sticky",
  top: 0,
  left: 0,
  borderBottom: "1px solid #f5f5f5",
  padding: "0 2em",
});