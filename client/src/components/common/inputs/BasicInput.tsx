import {ChangeEvent, ComponentProps, ForwardedRef, forwardRef} from "react";
import * as styles from './BasicInput.css';
import {Typography} from "@components/common/typography/Typography";
import classNames from "classnames";

type InputValue = string | number | ReadonlyArray<string>;
type InputChangeEvent = ChangeEvent<HTMLInputElement>;
type InputVariant = "default" | "input_button" | "checkbox";

interface InputProps extends ComponentProps<"input"> {
  variant?: InputVariant;
  label?: string;
  value?: InputValue;
  onChange?: (event: InputChangeEvent) => void;
}


const BasicInput = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    variant = "default",
    label,
    placeholder,
    disabled,
    className,
    value,
    onChange,
    id,
    type = "text",
    ...rest
  } = props;

  const onChangeHandler = (event: InputChangeEvent): void => {
    onChange && onChange(event);
  };

  return (
    <label className={styles.basicInputLayout}>
      {label && (<Typography fontWeight={400} color={'gray500'} fontSize={14}>{label}</Typography>)}
      <input
        ref={ref}
        className={classNames(styles.inputLayout)}
        disabled={disabled}
        id={id}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChangeHandler}
        {...rest}
      />
    </label>
  )
});

BasicInput.displayName = 'BasicInput';

export default BasicInput;