import { Typography } from "@components/common/typography/Typography";
import classNames from "classnames";
import { ReactElement } from "react";
import * as styles from "./ManagementLists.css";
import { signOut } from "next-auth/react";
import { useAuth } from "@providers/AuthProvider";

export const ManagementLists = (): ReactElement => {
  const { isLogin } = useAuth();

  const handleClickSignOut = async () => {
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
