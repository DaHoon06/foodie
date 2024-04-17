import {style} from "@vanilla-extract/css";
import {vars} from "@styles/theme.css";

export const profileEditTopLayout = style({
  width: "100%",
  backgroundColor: vars.colors.white000,
  position: "sticky",
  top: 0,
  left: 0,
  borderBottom: "1px solid #dddddd",
  padding: '0 20px'
});


export const profileEditorLayout = style({
  backgroundColor: vars.colors.white000,
  width: "100%",
  height: '100%',
  padding: '20px 20px'
})

export const profileImageImageBox = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 4,
  marginTop: '2em',
  marginBottom: '2em'
});

export const profileImage = style({
  display: "block",
  width: "auto",
  maxWidth: 107,
  height: "auto",
  objectFit: "cover",
  borderRadius: 8,
});

export const profileImageEditButtonWrapper = style({
  position: 'absolute'
});

export const profileImageEditButton = style({
  position: 'relative',
  left: 38,
  top: 34,
  zIndex: 999,
  backgroundColor: "rgba(138,138,138,0.68)",
  width: 28,
  height: 28,
  borderRadius: '50%',
  display: "flex",
  alignItems:"center",
  justifyContent: 'center'
});

export const profileEditorContainer = style({
  width: '100%',
  display: "flex",
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: 20
})

export const editTextareaWrapper = style({
  width: "100%",
  maxHeight: "70vh",
  height: "auto",
});

export const editTextarea = style({
  all: 'unset',
  "-webkit-appearance": 'none',
  "-moz-appearance": 'none',
  appearance: 'none',
  width: "100%",
  height: 144,
  boxSizing: "border-box",
  backgroundColor: vars.colors.backgroundColor,
  borderRadius: 2,
  fontSize: 14,
  border: `1px solid ${vars.colors.gray000}`,
  color: vars.colors.black500,
  resize: "none",
  overflow: 'auto',
  padding: "1em",
  outline: "none",
  whiteSpace: 'pre-wrap',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    "&::placeholder": {
      fontWeight: 300,
      color: vars.colors.gray300
    },
  }
});