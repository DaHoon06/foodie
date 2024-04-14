import * as styles from "./HorizontalBar.css";
import {Typography} from "@components/common/typography/Typography";
import classNames from "classnames";
import {useState} from "react";

interface HorizontalNavBarProps {
  lists: any[];
  onClickHandle: (value: string) => void;
}

const DEFAULT = '전체'

export const HorizontalNavBar = ({
  lists,
  onClickHandle,
}: HorizontalNavBarProps) => {
  const [active, setActive] = useState(DEFAULT);

  const onClickItem = (key: string, value: string) => {
    onClickHandle(value);
    setActive(key);
  };

  const itemActive = (value: string): boolean => {
    return value === active;
  };

  return (
    <nav className={styles.navBarLayout}>
      <ul className={styles.navBarLists}>
        {lists.map((list) => {
          return (
            <li
              className={classNames(
                itemActive(list.key) && styles.active, styles.filterLabel
              )}
              key={crypto.randomUUID()}
              onClick={() => onClickItem(list.key, list.value)}
            >
              <Typography
                color={itemActive(list.key) ? "white000" : "gray400"}
                fontSize={14}
              >
                {list.label}
              </Typography>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
