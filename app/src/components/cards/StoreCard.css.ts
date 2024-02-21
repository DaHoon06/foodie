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

export const storeInformationContainer = style({
  padding: '0.2em 0.4em'
})

export const locationLabel = style({});

export const storeTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0.3em 0'
})
export const storeCategories = style({
  margin: '0.4em 0'
})

export const storeCountLabelWrapper = style({
  display: 'flex',
})
export const storeCountLabel = style({
  display: 'flex',
  alignItems: 'center',
})

export const storeOptionLabel = style({
  margin: '0 0.2em'
})