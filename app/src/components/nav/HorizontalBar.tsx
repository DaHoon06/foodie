import * as styles from "@components/nav/NavBar.css";
import {Typography} from "@components/common/typography/Typography";

interface Items {
  label: string;
  value: string;
}

interface Props {
  items: Items[]
}

export const HorizontalBar = (props: Props) => {
  const {items} = props;
  return (
    <nav className={styles.navBarLayout}>
      <ul className={styles.navBarLists}>
        {items.map((item) => {
          return (
            <li className={styles.navBarItems} key={crypto.randomUUID()}>
              <Typography color={"gray400"} fontSize={14}>{item.label}</Typography>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}