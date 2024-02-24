import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const feedListsTitle = style({
  width: '100%',
  backgroundColor: vars.colors.white000
})

export const feedListsLayout = style({
  width: '100%',
  height: '100%',
  backgroundColor: vars.colors.backgroundColor,
  borderTop: '1px solid #dddddd',
  display: "flex",
  flexDirection: 'column',
  padding: '1em 1.25em',
  gap: 16
})
