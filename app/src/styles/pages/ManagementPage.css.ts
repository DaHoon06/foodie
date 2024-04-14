import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const cardLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "auto",
  padding: "2em 20px",
});

export const profileContainer = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "auto",
  padding: "2em 20px",
});

export const managementPageLayout = style({
  height: "calc(100% - 200px) !important",
  marginBottom: "1.25em",
});

export const pageTitle = style({
  width: "100%",
  backgroundColor: vars.colors.white000,
  position: "sticky",
  top: 0,
  left: 0,
  borderBottom: "1px solid #dddddd",
});

