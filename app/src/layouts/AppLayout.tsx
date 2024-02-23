import {PropsWithChildren, ReactElement} from "react";
import MetaHead from "./heads/MetaHead";
import * as styles from "@layouts/AppLayout.css";
import {AppLanding} from "@layouts/landing/AppLading";
import {Header} from "@components/header/Header";
import {NavBarBottom} from "@components/nav/NavBarBottom";
import {Footer} from "@layouts/footer/Footer";
import {ModalContainer} from "@containers/ModalContainer";

type Props = PropsWithChildren;

export const AppLayout = ({children}: Props): ReactElement => {
  return (
    <>
      <MetaHead/>
      <div className={styles.appLayout}>
        <AppLanding/>
        <div className={styles.appContainer}>
          <Header/>
          <main className={styles.appMainContainer}>
            {children}
          </main>
          <div id="modal"/>
          <ModalContainer/>
          <Footer/>
          <NavBarBottom/>
        </div>
      </div>

    </>
  )
}
