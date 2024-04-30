import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const managementItemContainer = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "auto",
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
    "&:nth-child(2)": {
      borderTop: "none",
      borderBottom: "none",
    },
  },
});
