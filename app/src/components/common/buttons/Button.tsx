import classNames from "classnames";
import {ComponentProps, CSSProperties, ReactElement} from "react";
import * as styles from "./Button.css";

export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant = "primary" | "icon";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  icon?: JSX.Element;
  type?: ButtonType;
  borderRadius?: string | number;
  width?: string | number;
  height?: string | number;
}

export const Button = (props: ButtonProps): ReactElement => {
  const {
    variant = "primary",
    className,
    type = "button",
    icon,
    children,
    disabled,
    borderRadius = 50,
    width,
    height,
    ...rest
  } = props;

  const style: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${borderRadius}px`,
  };

  return (
    <button
      className={classNames(className, styles[variant])}
      type={type}
      disabled={disabled}
      {...rest}
      style={style}
    >
      {children}
    </button>
  );
};
