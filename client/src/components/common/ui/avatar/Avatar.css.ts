import { style } from "@vanilla-extract/css";

export const avatarLayout = style({
  borderRadius: "50%",
  border: "none",
  width: "100%",
  height: "100%",
  minWidth: 44,
  minHeight: 44,
});

export const avatarImage = style({
  borderRadius: "50%",
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  border: "1px solid transpearnt",
});
