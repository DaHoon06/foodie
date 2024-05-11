import { keyframes, style } from "@vanilla-extract/css";

const loading = keyframes({
  "100%": {
    backgroundPosition: "-100% 0",
  },
});

export const LoadingMapOverlay = style({
  position: "absolute",
  width: "100%",
  height: 300,
  zIndex: 2,
  background:
    "linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 20%)",
  backgroundSize: "200% 100%",
  backgroundPosition: "100% 0",
  animation: `${loading} 1s infinite`,
  borderRadius: 2,
});
