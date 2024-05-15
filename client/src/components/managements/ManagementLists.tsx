import {Typography} from "@components/common/typography/Typography";
import classNames from "classnames";
import {ReactElement} from "react";
import * as styles from "./styles/ManagementLists.css";
import {signOut} from "next-auth/react";
import {useAuth} from "@providers/AuthProvider";
import useCookies from "@hooks/useCookie";
import {Cookies} from "react-cookie";

export const ManagementLists = (): ReactElement => {
  const {isLogin} = useAuth();
  const cookies = new Cookies();

  const handleClickSignOut = async () => {
    const isProd = process.env.NODE_ENV !== "development";
    const domain = isProd
      ? process.env.NEXT_PUBLIC_PROD
      : process.env.NEXT_PUBLIC_LOCAL;
    cookies.remove('Authorization', {
      domain,
      path: '/'
    });
    await signOut();
  };

  return (
    <section className={classNames(styles.managementItemContainer)}>
      <ul className={styles.managementItemList}>
        <li className={styles.managementItem}>
          <Typography fontSize={14} color={"gray400"} fontWeight={300}>
            공지사항
          </Typography>
        </li>
        {isLogin && (
          <>
            <li className={styles.managementItem}>
              <button type="button" onClick={handleClickSignOut}>
                <Typography
                  as={"span"}
                  fontSize={14}
                  color={"gray400"}
                  fontWeight={300}
                >
                  로그아웃
                </Typography>
              </button>
            </li>
            <li className={styles.managementItem}>
              <Typography fontSize={14} color={"gray400"} fontWeight={300}>
                회원탈퇴
              </Typography>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};
