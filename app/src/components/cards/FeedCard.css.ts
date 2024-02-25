import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const feedCardLayout = style({
  backgroundColor: vars.colors.white000,
  borderRadius: 2,
  boxShadow: '0 0 16px rgb(50 50 50 / 12%)',
  minHeight: 400,
  padding: '1em'
})

export const profileBox = style({
  width: 44,
  height: 44,
  borderRadius: '50%',
})
export const contentBox = style({
  margin: '16px auto',
  width: '100%',
  height: 'auto'
})
export const imageBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px auto',
  borderRadius: 4
})
export const images = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 4
})
export const storeInfoBox = style({
  backgroundColor: vars.colors.backgroundColor,
  borderRadius: 4,
  border: '1px solid #ededed',
  padding: '1em',
  margin: '10px auto'
})
