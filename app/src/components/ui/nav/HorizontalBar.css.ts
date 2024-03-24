import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const navBarLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  overflow: "hidden",
  display: "flex",
  margin: "0 auto",
  height: 46,
});
export const customNavBarLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  overflow: "hidden",
  display: "flex",
  margin: "0 auto",
  height: "auto",
  borderRadius: 6,
});

export const navBarLists = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  scrollbarWidth: "none",
  overflow: "auto hidden",
  gap: 10,
});

export const navBarItems = style({
  border: "1px solid transparent",
  padding: "0 0.5em",
  selectors: {
    "&:nth-child(1)": {
      marginLeft: "12px",
    },
  },
});

export const active = style({
  backgroundColor: "#ededed",
  borderRadius: 50,
  padding: "4px 8px",
  borderColor: "#dbdbdb",
});
