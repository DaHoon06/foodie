import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const thumbnailCardLayout = style({
  maxWidth: 210,
  height: 220,
  backgroundColor: vars.colors.white000,
  borderRadius: 10,
  border: "1px solid #F4F4F4",
  padding: 20,
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
  maxHeight: 110,
  objectFit: "cover",
  borderRadius: 8,
});

export const thumbnailCardContentBox = style({
  width: "100%",
});

export const thumbnailCardContent = style({
  whiteSpace: "wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  lineHeight: "1.2em",
});
/**
 * white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
 */
