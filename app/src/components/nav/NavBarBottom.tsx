import * as styles from './NavBarBottom.css';
import {RiHome5Line, RiMessage3Line, RiPencilFill, RiStarSLine, RiUserLine} from "react-icons/ri";
import {Typography} from "@components/common/typography/Typography";
import {useRouter} from "next/router";
import {FontColorType} from "@components/common/typography/Typography.type";
import {useEffect, useState} from "react";

const link = {
  home: {label: '홈', to: '/'},
  community: {label: '홈', to: '/community'},
  posts: {label: '글작성', to: '/posts'},
  likes: {label: '홈', to: '/likes'},
  management: {label: '마이', to: '/management'}
}

export const NavBarBottom = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.pathname)

  useEffect(() => {
    const path = router.pathname;
    if (path.includes('search')) setCurrentPath('/')
    else setCurrentPath(router.pathname)
  }, [currentPath])

  const onClickHandlerMenu = async (to: string) => {
    setCurrentPath(to);
    await router.push(to);
  }

  const buttonActive = (to: string): boolean => {
    return currentPath === to;
  }

  const textActive = (to: string): FontColorType => {
    return buttonActive(to) ? 'primary' : 'gray400' as FontColorType;
  }

  const iconActive = (to: string) => {
    return buttonActive(to) ? '#FF7101' : '#646464'
  }

  return (
    <nav className={styles.navBarBottomLayout}>
      <ul className={styles.navBarBottomContainer}>
        <li className={styles.navBarLeftBox}>
          <button
            type={'button'}
            className={styles.navBarBottomItems}
            onClick={() => onClickHandlerMenu(link.home.to)}>
            <RiHome5Line size={22} color={iconActive(link.home.to)}/>
            <Typography as={'span'} color={textActive(link.home.to)} fontWeight={500}
                        fontSize={12}>
              {link.home.label}
            </Typography>
          </button>
          <button type={'button'}
                  className={styles.navBarBottomItems}
                  onClick={() => onClickHandlerMenu(link.community.to)}>
            <RiMessage3Line size={22} color={iconActive(link.community.to)}/>
            <Typography as={'span'} color={textActive(link.community.to)} fontWeight={500}
                        fontSize={12}>
              메세지
            </Typography>
          </button>
        </li>
        <li className={styles.navBarCenterBox}>
          <button type={'button'} aria-label={'post_register_button'}
                  className={styles.navBarCenterButton}
                  onClick={() => onClickHandlerMenu(link.posts.to)}>
            <RiPencilFill size={22} color={'#fff'}/>
          </button>
        </li>
        <li className={styles.navBarRightBox}>
          <button type={'button'}
                  className={styles.navBarBottomItems}
                  onClick={() => onClickHandlerMenu(link.likes.to)}>
            <RiStarSLine size={22} color={iconActive(link.likes.to)}/>
            <Typography as={'span'} color={textActive(link.likes.to)} fontWeight={500}
                        fontSize={12}>
              즐겨찾기
            </Typography>
          </button>
          <button type={'button'}
                  className={styles.navBarBottomItems}
                  onClick={() => onClickHandlerMenu(link.management.to)}>
            <RiUserLine size={22} color={iconActive(link.management.to)}/>
            <Typography as={'span'} color={textActive(link.management.to)} fontWeight={500}
                        fontSize={12}>
              마이
            </Typography>
          </button>
        </li>
      </ul>
    </nav>
  )
}
