import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const feedListsLayout = style({
  padding: 0,
  width: "100%",
  height: "auto",
  maxHeight: "100%",
  backgroundColor: vars.colors.backgroundColor,
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const feedCardWrapper = style({
  marginBottom: "0.5em",
});

export const emptyLabel = style({
  width: "100%",
  textAlign: "center",
  marginBottom: 20,
  marginTop: 20,
});

