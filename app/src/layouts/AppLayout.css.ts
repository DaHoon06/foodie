import {style} from '@vanilla-extract/css';

export const appLayout = style({
  width: "100%",
  maxWidth: "unset",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  gap: 30,
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  justifyContent: "center",
  backgroundColor: "#f5f5f5"
});

export const appContainer = style({
  width: '100%',
  maxWidth: '428px !important',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  boxShadow: "0px 0px 16px rgb(50 50 50 / 12%)"
})

export const appMainContainer = style({
  width: '100%',
  maxWidth: '428px !important',
  position: "relative",
  top: 98,
  left: 0,
  right: 0,
  bottom: 0,
  height: "calc(100% - 162px)",
})

/**
 * display: -webkit-box;
 * display: -webkit-flex;
 * display: -ms-flexbox;
 * display: flex;
 * -webkit-flex-direction: row;
 * -ms-flex-direction: row;
 * flex-direction: row;
 * width: 100%;
 * max-width: unset!important;
 * min-height: var(--100vh);
 * gap: 120px;
 * padding-left: 0!important;
 * padding-right: 0!important;
 * -webkit-box-pack: center;
 * -ms-flex-pack: center;
 * -webkit-justify-content: center;
 * justify-content: center;
 * background-color: #F5F5F5;
 *
 */