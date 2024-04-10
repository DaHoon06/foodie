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

export const profileInfoBox = style({
  marginLeft: "2em",
});

export const pageTitle = style({
  width: "100%",
  backgroundColor: vars.colors.white000,
  position: "sticky",
  top: 0,
  left: 0,
  borderBottom: "1px solid #dddddd",
});

export const managementItemContainer = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: 200,
  padding: "1em 0",
});

export const managementItemList = style({
  width: "100%",
  height: "100%",
});

export const managementItem = style({
  width: "100%",
  padding: "1em 20px",
  borderTop: `1px solid ${vars.colors.gray000}`,
  borderBottom: `1px solid ${vars.colors.gray000}`,

  selectors: {
    "&:nth-child(1)": {
      borderBottom: "none",
    },
  },
});
