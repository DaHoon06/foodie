import * as styles from './NavBarBottom.css';
import {RiEditLine, RiHome5Line, RiMessage3Line, RiStarSLine, RiUserLine} from "react-icons/ri";

export const NavBarBottom = () => {
  return (
    <nav className={styles.navBarBottomLayout}>
      <div className={styles.navBarBottomContainer}>
        <ul className={styles.navBarBottomLists}>
          <li className={styles.navBarBottomItems}>
            <RiHome5Line size={22} color={'#646464'}/>
            홈
          </li>
          <li className={styles.navBarBottomItems}>
            <RiEditLine size={22} color={'#646464'}/>
            탐색
          </li>
          <li className={styles.navBarBottomItems}>
            <RiMessage3Line size={22} color={'#646464'}/>
            선물관
          </li>
          <li className={styles.navBarBottomItems}>
            <RiStarSLine size={22} color={'#646464'}/>
            기획전
          </li>
          <li className={styles.navBarBottomItems}>
            <RiUserLine size={22} color={'#646464'}/>
            마이
          </li>
        </ul>
      </div>
    </nav>
  )
}