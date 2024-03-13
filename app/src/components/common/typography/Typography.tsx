import React, { ReactElement } from "react";
import {
  TypographyProps,
  Variant,
} from "@components/common/typography/Typography.type";
import { vars } from "@styles/theme.css";

const element: { [key in Variant]: string } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  p: "p",
  caption: "caption",
};

function baseElement(props: TypographyProps) {
  const {
    className,
    variant = "p",
    fontWeight = 400,
    fontSize = 16,
    color = "black100",
    lineHeight = 18,
    letterSpacing = "-0.5",
    children,
    as,
    ...rest
  } = props;
  return React.createElement(
    as || element[variant],
    {
      className,
      style: {
        color: vars.colors[color],
        fontWeight,
        fontSize: `min(5vw, ${fontSize}px)`,
        lineHeight: `${lineHeight}px`,
        letterSpacing: `${letterSpacing}px`,
      },
      ...rest,
    },
    children
  );
}

export const Typography = (props: TypographyProps): ReactElement => {
  return React.createElement(baseElement, props);
};
