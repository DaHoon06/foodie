import { style } from "@vanilla-extract/css";

export const avatarLayout = style({
  borderRadius: "50%",
  border: "1px solid #ececec",
});

export const avatarImage = style({
  borderRadius: "50%",
  width: "auto",
  height: "100%",
  display: "block",
  objectFit: "cover",
  border: "1px solid #ececec",
});
