import {style} from "@vanilla-extract/css";


export const starRatings = style({
  color: "#aaa9a9",
  position: "relative",
  unicodeBidi: "bidi-override",
  width: "max-content",
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "1.3px",
  WebkitTextStrokeColor: "#ededed",
});
export const starRatingsFill = style({
  color: "#fff58c",
  padding: 0,
  position: "absolute",
  zIndex: 1,
  display: "flex",
  top: 0,
  left: 0,
  overflow: "hidden",
  WebkitTextFillColor: "gold",
});

export const starRatingsBase = style({
  zIndex: 0,
  padding: 0,
});
