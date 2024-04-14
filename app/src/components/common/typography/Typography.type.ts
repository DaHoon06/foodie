import React, {ComponentProps} from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "caption";
export type FontWeightType = 100 | 300 | 400 | 500 | 600 | 700;
export type FontSizeType =
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 20
  | 22
  | 24
  | 26
  | 28
  | 30
  | 32;
export type FontColorType =
  | "black000"
  | "black100"
  | "white000"
  | "gray000"
  | "gray300"
  | "gray400"
  | 'gray500'
  | "primary"

export type LetterSpacing = "-2" | "-1.5" | "-1" | "-0.5" | "1";
export type LineHeight =
  | 18
  | 20
  | 22
  | 24
  | 26
  | 28
  | 30
  | 32
  | 34;

export interface TypographyProps extends ComponentProps<"p"> {
  variant?: Variant;
  fontWeight?: FontWeightType;
  fontSize?: FontSizeType;
  color?: FontColorType;
  letterSpacing?: LetterSpacing;
  lineHeight?: LineHeight;
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
}
