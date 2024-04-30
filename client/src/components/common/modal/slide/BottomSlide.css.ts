import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const modalLayout = style({
  position: "fixed",
  bottom: "0",
  width: "100%",
  maxWidth: 428,
  display: "flex",
  alignItems: "center",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  zIndex: 200,
});

export const modalBackGroundLayer = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  width: "100vw",
  height: "auto",
  minHeight: "100vh",
  transition: "all 0.3s ease-in-out",
});

export const bottomSlideContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const bottomSlideBody = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: vars.colors.white000,
  width: "100%",
  minHeight: 300,
  height: "auto",
  borderRadius: "20px 20px 0 0",
  boxShadow: "0 0 16px rgb(50 50 50 / 12%)",
  // position: 'absolute'
});
