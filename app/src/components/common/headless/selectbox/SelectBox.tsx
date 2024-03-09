import { useState } from "react";
import * as styles from "./SelectBox.css";
import { Typography } from "@components/common/typography/Typography";

export type Items = {
  id: string;
  key: string;
  label: string;
};

export interface SelectBoxProps {
  items: Items[];
  onChange: (value: string) => void;
}

export const SelectBox = (props: SelectBoxProps) => {
  const { items, onChange } = props;
  const [currentValue, setCurrentValue] = useState(items[0].label);
  const [showOptions, setShowOptions] = useState(false);

  const onClickSelectOptions = (value: string) => {
    setCurrentValue(value);
    onChange(value);
  };

  return (
    <div
      className={styles.selectBox}
      onClick={() => setShowOptions((prev) => !prev)}
    >
      <Typography color={"gray400"} fontSize={14}>
        {currentValue}
      </Typography>
      <ul
        className={styles.selectBoxOptions}
        style={{ maxHeight: showOptions ? "none" : 0 }}
      >
        {items.map((option, index) => {
          return (
            <li
              className={styles.selectBoxOption}
              key={`${option.key}_${index}_${option.id}`}
              value={option.key}
              onClick={() => onClickSelectOptions(option.label)}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
