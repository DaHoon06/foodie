import { style } from "@vanilla-extract/css";

export const FeedPostLayout = style({
  width: "100%",
  minHeight: "70vh",
  height: "auto",
});

export const FeedTextarea = style({
  width: "100%",
  height: "100%",
  background: "white",
  border: "none",
  resize: "none",
  minHeight: 400,
  boxSizing: "border-box",
  padding: "1em",
  outline: "none",
  color: "black",
});
