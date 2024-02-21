import {PropsWithChildren, ReactElement} from "react";
import MetaHead from "./heads/MetaHead";
import * as styles from "@layouts/AppLayout.css";
import {AppLanding} from "@layouts/landing/AppLading";
import {Header} from "@components/header/Header";
import {NavBarTop} from "@components/nav/NavBarTop";
import {NavBarBottom} from "@components/nav/NavBarBottom";

type Props = PropsWithChildren;

export const AppLayout = ({children}: Props): ReactElement => {
  return (
    <>
      <MetaHead/>
      <div className={styles.appLayout}>
        <AppLanding/>
        <div className={styles.appContainer}>
          <Header/>
          <NavBarTop/>
          <main className={styles.appMainContainer}>
            {children}

          </main>
          <NavBarBottom/>
        </div>

      </div>

    </>
  )
}