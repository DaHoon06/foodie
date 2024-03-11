import classNames from "classnames";
import { ComponentProps, ReactElement } from "react";
import * as styles from "./Button.css";

export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant = "primary" | "icon";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  icon?: JSX.Element;
  type?: ButtonType;
}

export const Button = (props: ButtonProps): ReactElement => {
  const {
    variant = "primary",
    className,
    type = "button",
    icon,
    children,
    disabled,
    ...rest
  } = props;
  return (
    <button
      className={classNames(className, styles.primary)}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
