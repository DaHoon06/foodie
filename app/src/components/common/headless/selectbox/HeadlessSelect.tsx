import {ChangeEvent, useState} from 'react';
import * as styles from './HeadlessSelect.css';

export type Items = {
  id: string;
  key: string;
  label: string;
};

export interface SelectBoxProps {
  items: Items[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const HeadlessSelect = (props: SelectBoxProps) => {
  const {items} = props;
  const [currentValue, setCurrentValue] = useState(items[0].label);
  const [showOptions, setShowOptions] = useState(false)

  const onClickSelectOptions = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <div className={styles.selectBox} onClick={() => setShowOptions((prev) => !prev)}>
      <div>{currentValue}</div>
      <ul>
        {items.map((option, index) => {
          return (
            <li className={styles.selectBoxOptions} key={`${option.key}_${index}_${option.id}`} value={option.key}
                onClick={() => onClickSelectOptions(option.label)}>
              {option.label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}