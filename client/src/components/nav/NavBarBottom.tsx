import * as styles from "./styles/NavBarBottom.css";
import {RiHome5Line, RiMessage3Line, RiPencilFill, RiUserLine,} from "react-icons/ri";
import {useRouter} from "next/router";
import {FontColorType} from "@components/common/typography/Typography.type";
import {useEffect, useState} from "react";
import useModalStore from "@store/modalStore";
import {useSession} from "next-auth/react";
import {CiViewList} from "react-icons/ci";

const link = {
  home: {label: "홈", to: "/"},
  timeline: {label: "소식", to: "/timeline"},
  posts: {label: "글작성", to: "/feeds/post"},
  myFeedLists: {label: "내가 작성한 게시글", to: "/feeds"},
  management: {label: "마이", to: "/management"},
};

export const NavBarBottom = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.pathname);
  const {setIsOpen, setModalType} = useModalStore();
  const {data: session} = useSession();

  useEffect(() => {
    const path = router.pathname;
    if (path.includes("search")) setCurrentPath("/");
    else setCurrentPath(router.pathname);
  }, [currentPath]);

  const onClickHandlerMenu = async (to: string) => {
    if (to === link.posts.to || to === link.myFeedLists.to || to === link.timeline.to) {
      if (!session) {
        setModalType("signInAlertBox");
        setIsOpen(true);
        return;
      }
      // 만약 로그인이 안되어있다면?
    }
    setCurrentPath(to);
    await router.push(to);
  };

  const buttonActive = (to: string): boolean => {
    return currentPath === to;
  };

  const textActive = (to: string): FontColorType => {
    return buttonActive(to) ? "primary" : ("gray400" as FontColorType);
  };

  const iconActive = (to: string) => {
    return buttonActive(to) ? "#FF7101" : "#646464";
  };

  return (
    <nav className={styles.navBarBottomLayout}>
      <ul className={styles.navBarBottomContainer}>
        <li className={styles.navBarLeftBox}>
          <button
            aria-label="home-button"
            type={"button"}
            className={styles.navBarBottomItems}
            onClick={() => onClickHandlerMenu(link.home.to)}
          >
            <RiHome5Line size={22} color={iconActive(link.home.to)}/>
          </button>
          <button
            aria-label="pick-button"
            type={"button"}
            className={styles.navBarBottomItems}
            onClick={() => onClickHandlerMenu(link.myFeedLists.to)}
          >
            <CiViewList size={22} color={iconActive(link.myFeedLists.to)}/>
          </button>
        </li>
        <li className={styles.navBarCenterBox}>
          <button
            type={"button"}
            aria-label={"post_register_button"}
            className={styles.navBarCenterButton}
            onClick={() => onClickHandlerMenu(link.posts.to)}
          >
            <RiPencilFill size={22} color={"#fff"}/>
          </button>
        </li>
        <li className={styles.navBarRightBox}>
          <button
            aria-label="message-button"
            type={"button"}
            className={styles.navBarBottomItems}
            onClick={() => onClickHandlerMenu(link.timeline.to)}
          >
            <RiMessage3Line size={22} color={iconActive(link.timeline.to)}/>
          </button>
          <button
            aria-label="management-button"
            type={"button"}
            className={styles.navBarBottomItems}
            onClick={() => onClickHandlerMenu(link.management.to)}
          >
            <RiUserLine size={22} color={iconActive(link.management.to)}/>
          </button>
        </li>
      </ul>
    </nav>
  );
};
