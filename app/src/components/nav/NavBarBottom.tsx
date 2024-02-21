import * as styles from './NavBarBottom.css';
import {RiEditLine, RiHome5Line, RiMessage3Line, RiStarSLine, RiUserLine} from "react-icons/ri";
import {Typography} from "@components/common/typography/Typography";

export const NavBarBottom = () => {
  return (
    <nav className={styles.navBarBottomLayout}>
      <div className={styles.navBarBottomContainer}>
        <ul className={styles.navBarBottomLists}>
          <li className={styles.navBarBottomItems}>
            <RiHome5Line size={22} color={'#646464'}/>
            <Typography as={'span'} color={'gray400'} fontWeight={500} fontSize={12}>
              홈
            </Typography>
          </li>
          <li className={styles.navBarBottomItems}>
            <RiEditLine size={22} color={'#646464'}/>
            <Typography as={'span'} color={'gray400'} fontWeight={500} fontSize={12}>
              탐색
            </Typography>

          </li>
          <li className={styles.navBarBottomItems}>
            <RiMessage3Line size={22} color={'#646464'}/>
            <Typography as={'span'} color={'gray400'} fontWeight={500} fontSize={12}>
              선물관
            </Typography>

          </li>
          <li className={styles.navBarBottomItems}>
            <RiStarSLine size={22} color={'#646464'}/>
            <Typography as={'span'} color={'gray400'} fontWeight={500} fontSize={12}>
              기획전
            </Typography>

          </li>
          <li className={styles.navBarBottomItems}>
            <RiUserLine size={22} color={'#646464'}/>
            <Typography as={'span'} color={'gray400'} fontWeight={500} fontSize={12}>
              마이
            </Typography>

          </li>
        </ul>
      </div>
    </nav>
  )
}