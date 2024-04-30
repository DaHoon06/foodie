import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

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
  gap: 16,
  paddingTop: 8,
  paddingBottom: 8,

  //todo device에 따라서 다르게 줘야하는데..
  // "@media": {
  //   "screen and (max-width: 1024px)": {
  //     overflow: "auto hidden",
  //   },
  //   "screen and (max-width: 480px)": {
  //     overflow: "auto hidden",
  //   },
  // },

  selectors: {
    "&:nth-child(1)": {
      paddingLeft: "20px !important",
    },
    "&:last-child": {
      paddingRight: "20px !important",
    },
  },
});
export const filterLabel = style({
  borderRadius: 50,
  padding: "4px 8px",
})
export const active = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white000,
});
