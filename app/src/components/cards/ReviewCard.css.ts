import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const reviewCardLayout = style({
  width: '100%',
  backgroundColor: vars.colors.white000,
  border: '1px solid #ededed',
  borderRadius: 4,
  padding: '1em'
})

export const reviewContentBox = style({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 5,
  textOverflow: '',

  selectors: {
    '&::after': {
      content: '....더보기'
    }
  }
})
