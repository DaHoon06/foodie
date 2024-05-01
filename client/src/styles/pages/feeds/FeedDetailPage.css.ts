import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const commentLayout = style({
  backgroundColor: vars.colors.white000,
  width: '100%',
  position: "absolute",
  bottom: 0,
});

export const commentBoxContainer = style({
  height: '100%',
  position: 'relative',
  minHeight: 90,
  display: "flex",
  alignItems: 'center',
  justifyContent: "center",
  gap: 10,
  padding: '0 1em'
})
