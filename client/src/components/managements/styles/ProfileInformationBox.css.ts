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
  marginLeft: "1em",
});

export const profileImage = style({
  display: "block",
  width: 60,
  height: 60,
  objectFit: "cover",
  borderRadius: "50%",
  border: "1px solid #ececec",
});
