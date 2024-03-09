import * as styles from "./HorizontalBar.css";
import { Typography } from "@components/common/typography/Typography";
import classNames from "classnames";
import { useState } from "react";

interface HorizontalNavBarProps {
  lists: any[];
  onClickHandle: (value: string) => void;
}
export const HorizontalNavBar = ({
  lists,
  onClickHandle,
}: HorizontalNavBarProps) => {
  const [active, setActive] = useState("seoul");

  const onClickItem = (value: string) => {
    onClickHandle(value);
    setActive(value);
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
                styles.navBarItems,
                itemActive(list.key) && styles.active
              )}
              key={crypto.randomUUID()}
              onClick={() => onClickItem(list.key)}
            >
              <Typography color={"gray400"} fontSize={14}>
                {list.label}
              </Typography>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
