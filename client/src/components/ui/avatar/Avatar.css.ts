import { style } from "@vanilla-extract/css";

export const avatarLayout = style({
  borderRadius: "50%",
  border: "1px solid transperant",
  width: 40,
  height: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const avatarImage = style({
  borderRadius: "50%",
  width: 40,
  height: 40,
  display: "block",
  objectFit: "cover",
  border: "1px solid #ececec",
});
