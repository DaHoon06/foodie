import {style} from "@vanilla-extract/css";

export const carouselLayout = style({
  width: '100%',
  height: '100%',
  maxHeight: 300
})

export const carouselBanner = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
export const carouselBannerImage = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

export const carouselCountWrapper = style({
  position: "relative",
  bottom: 42,
  left: '86%',
  zIndex: 1,
  backgroundColor: 'rgba(79,79,79,0.61)',
  width: 46,
  height: 30,
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: 'center',
  borderRadius: '24px',
  color: '#fff',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '-0.3px'
})