import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const managementPageLayout = style({
  height: "calc(100% - 200px) !important",
});

export const profileBox = style({
  border: "1px solid #ededed",
  borderRadius: "50%",
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ededed",
});

export const pageTitle = style({
  width: "100%",
  backgroundColor: vars.colors.white000,
  position: "sticky",
  top: 0,
  left: 0,
  borderBottom: "1px solid #dddddd",
});

export const profileContainer = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  height: 300,
});
