import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const feedOptionList = style({
  position: "absolute",
  right: 22,
  border: `1px solid ${vars.colors.gray000}`,
  padding: "0.5em 0",
  borderRadius: 4,
  width: 100,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  backgroundColor: vars.colors.white000,
});

export const feedCardLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  height: "auto",
  padding: "1em",
});

export const profileBox = style({
  width: 44,
  height: 44,
});

export const contentBox = style({
  margin: "16px auto",
  width: "100%",
  height: "auto",
});
export const imageBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px auto",
  borderRadius: 4,
});
export const images = style({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 4,
});
export const storeInfoBox = style({
  backgroundColor: vars.colors.backgroundColor,
  borderRadius: 4,
  border: "1px solid #ededed",
  padding: "1em",
  margin: "10px auto",
});

export const storeOptions = style({
  padding: "1em 0",
});
