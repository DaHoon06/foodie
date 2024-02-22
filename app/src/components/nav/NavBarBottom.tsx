import * as styles from './NavBarBottom.css';
import {RiHome5Line, RiMessage3Line, RiPencilFill, RiStarSLine, RiUserLine} from "react-icons/ri";
import {Typography} from "@components/common/typography/Typography";

export const NavBarBottom = () => {
  return (
    <nav className={styles.navBarBottomLayout}>
      <ul className={styles.navBarBottomContainer}>
        <li className={styles.navBarLeftBox}>
          <button type={'button'} className={styles.navBarBottomItems}>
            <RiHome5Line size={22} color={'#646464'}/>
            <Typography as={'span'} color={'gray400'} fontWeight={500} fontSize={12}>
              홈
            </Typography>
          </button>
          <button type={'button'} className={styles.navBarBottomItems}>
            <RiMessage3Line size={22} color={'#646464'}/>
            <Typography as={'span'} color={'gray400'} fontWeight={500} fontSize={12}>
              메세지
            </Typography>
          </button>
        </li>
        <li className={styles.navBarCenterBox}>
          <button type={'button'} aria-label={'post_register_button'} className={styles.navBarCenterButton}>
            <RiPencilFill size={22} color={'#fff'}/>
          </button>
        </li>
        <li className={styles.navBarRightBox}>
          <button type={'button'} className={styles.navBarBottomItems}>
            <RiStarSLine size={22} color={'#646464'}/>
            <Typography as={'span'} color={'gray400'} fontWeight={500} fontSize={12}>
              즐겨찾기
            </Typography>
          </button>
          <button type={'button'} className={styles.navBarBottomItems}>
            <RiUserLine size={22} color={'#646464'}/>
            <Typography as={'span'} color={'gray400'} fontWeight={500} fontSize={12}>
              마이
            </Typography>
          </button>
        </li>
      </ul>
    </nav>
  )
}