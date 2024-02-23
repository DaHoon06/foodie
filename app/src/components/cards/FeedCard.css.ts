import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const feedCardLayout = style({
  border: '1px solid #dddddd',
  backgroundColor: vars.colors.white000,
  borderRadius: 2,
  boxShadow: '0 0 16px rgb(50 50 50 / 12%)',
  minHeight: 400,
})
