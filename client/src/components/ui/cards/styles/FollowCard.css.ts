import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const followCardLayout = style({
  maxWidth: 140,
  minHeight: 210,
  height: "auto",
  backgroundColor: vars.colors.white000,
  borderRadius: 10,
  border: "1px solid #F4F4F4",
  padding: 16,
});

export const thumbnailImageBox = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 4,
});

export const thumbnailImage = style({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50%",
  maxWidth: 70,
});
export const profileDescription = style({
  whiteSpace: "wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  lineHeight: "1.2em",
});
