import {style} from "@vanilla-extract/css";

export const storeListsLayout = style({
  display: 'flex',
  flexDirection: "column",
  width: '100%',
  gap: 40,
  padding: '0.5em',
  overflow: 'hidden',
  paddingBottom: 100
});

export const storeListsContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8
})