import {style} from "@vanilla-extract/css";

export const storeCardLayout = style({
  width: '100%',
  height: '100%',
})

export const thumbnailImageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const thumbnailImage = style({
  display: 'block',
  width: '100%',
  height: 160,
  objectFit: 'cover',
  borderRadius: 4
})

export const locationLabel = style({});

export const storeTitle = style({
  display: 'flex',
  justifyContent: 'space-between'
})
export const storeCategories = style({})

export const storeCountLabel = style({
  display: 'flex',
})