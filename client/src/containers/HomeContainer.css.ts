import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const homeContainerLayout = style({
  width: "100%",
  maxWidth: "428px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  marginLeft: "unset",
  marginRight: "unset",
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  boxShadow: "0 0 16px rgb(50, 50, 50 / 12%)",

  "@media": {
    "screen and (max-width: 1024px)": {
      width: "466px",
    },
    "screen and (max-width: 480px)": {
      width: "100vw",
    },
  },
});

export const homeContainer = style({
  padding: "0",
  width: "100%",
  backgroundColor: vars.colors.backgroundColor,
});

export const recentlyFeedContainer = style({
  backgroundColor: vars.colors.white000,
  paddingBottom: 20,
  marginBottom: 8
})

export const userContainer = style({
  backgroundColor: vars.colors.white000,
  margin: '8px 0',
  paddingBottom: 20
})
export const emptyLabel = style({
  width: '100%',
  textAlign: 'center',
  marginBottom: 20
})

export const titleWrapper = style({
  width: "100%",
  padding: "1em 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const homeListsFilterContainer = style({
  position: "sticky",
  width: "100%",
  height: 48,
  top: 60,
  backgroundColor: vars.colors.white000,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1em",
  zIndex: 99,
  borderBottom: "1px solid transparent",
});

export const filterButton = style({
  border: `1px solid ${vars.colors.gray000}`,
  borderRadius: 20,
  padding: "0.25em 0.6em",
});

export const filterLists = style({
  position: "sticky",
  top: 108,
  borderBottom: "1px solid transparent",
  zIndex: 99
});

