import {style} from "@vanilla-extract/css";

export const footerLayout = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  marginBottom: 70,
})

export const information = style({
  backgroundColor: '#f5f5f5',
  color: '#222',
  height: 160,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: '0.8em 1em'
})

export const copyright = style({
  backgroundColor: '#222',
  color: '#fff',
  height: 90,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10
})