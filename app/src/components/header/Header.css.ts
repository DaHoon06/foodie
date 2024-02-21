import {style} from "@vanilla-extract/css";

export const headerLayout = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 428,
  height: '48px',
  margin: '0 auto',
  minHeight: 'unset !important',
  padding: '0 20px',
  gap: 8,
  backgroundColor: '#fff',
  color: '#222',
  position: 'fixed',
  top: '0',
});

export const headerLists = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%'
})

export const logo = style({
  width: 'auto',
  height: 34
})