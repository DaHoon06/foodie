import * as styles from './NavBarTop.css';

export const NavBarTop = () => {
  return (
    <nav className={styles.navBarTopLayout}>
      <ul className={styles.navBarTopLists}>
        <li className={styles.navBarTopItems}>
          홈
        </li>
        <li className={styles.navBarTopItems}>
          첫구매추천
        </li>
        <li className={styles.navBarTopItems}>
          베스트
        </li>
        <li className={styles.navBarTopItems}>
          선물제안
        </li>
        <li className={styles.navBarTopItems}>
          2득데이
        </li>
        <li className={styles.navBarTopItems}>
          실시간세일
        </li>
      </ul>
    </nav>
  )
}