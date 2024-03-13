import * as styles from "./HorizontalBar.css";
import { PropsWithChildren, useState } from "react";

interface HorizontalNavBarProps extends PropsWithChildren {
  onClickHandle?: (value: string) => void;
}

export const CustomHorizontalBar = ({
  onClickHandle,
  children,
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
    <nav className={styles.customNavBarLayout}>
      <div className={styles.navBarLists}>{children}</div>
    </nav>
  );
};
