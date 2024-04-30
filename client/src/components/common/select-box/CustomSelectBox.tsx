import {ReactElement, useMemo} from "react";
import Select, {StylesConfig} from "react-select";
import * as styles from './CustomSelectBox.css';

export interface Option {
  name: string;
  value: string | number;
  label: string;
}

interface Props {
  options: Option[];
  onChange: (e: Option) => void;
  placeholder?: string;
}

export const SelectBox = (props: Props): ReactElement => {
  const { options, onChange, placeholder } = props;

  const customStyles: StylesConfig = useMemo(
    () => ({
      option: (provided, state: any) => ({
        ...provided,
        border: "1px border #ededed",
        color: state.data.color,
        opacity: 0.8,
        padding: 10,
        "&:hover": {
          cursor: "pointer",
        },
      }),
      control: (provided, state: any) => ({
        ...provided,
        borderColor: state.isFocused ? "var(--primary)" : "#ededed",
        boxShadow: state.isFocused ? "var(--primary)" : "#ededed",
        caretColor: "transparent",
        "& svg": {
          fill: state.isFocused ? "var(--primary)" : "currentColor",
        },
        "&:hover": {
          cursor: "pointer",
        },
      }),
      singleValue: (provided, state: any) => ({
        ...provided,
        color: state.data.color,
      }),
      menuList: (provided) => ({
        ...provided,
        "&:hover": {
          cursor: "pointer",
        },
      }),
    }),
    [],
  );

  const handleChangeSelect = (e: any) => {
    onChange && onChange(e);
  };

  return (
    <Select
      options={options}
      onChange={handleChangeSelect}
      placeholder={placeholder}
      defaultValue={options[0]}
      styles={customStyles}
      className={styles.customSelectBoxLayout}
    />
  );
}