import * as styles from "@layouts/BasicLayout.css";
import { AppLanding } from "@layouts/landing/AppLading";
import { NavBarBottom } from "@components/ui/nav/NavBarBottom";
import { PropsWithChildren, ReactElement } from "react";
import { ModalContainer } from "@containers/ModalContainer";

type Options = {
  backgroundColor?: string;
};
type Props = PropsWithChildren & { options?: Options };

export const BasicLayout = ({ children, options }: Props): ReactElement => {
  return (
    <div className={styles.appLayout}>
      <AppLanding />
      <div className={styles.appContainer}>
        <main className={styles.appMainContainer}>{children}</main>
        <ModalContainer />
        <NavBarBottom />
      </div>
    </div>
  );
};
