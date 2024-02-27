import {PropsWithChildren} from "react";
import MetaHead from "@layouts/heads/MetaHead";
import * as styles from './SearchLayout.css';
import {AppLanding} from "@layouts/landing/AppLading";
import {NavBarBottom} from "@components/nav/NavBarBottom";
import {ModalContainer} from "@containers/ModalContainer";

type Props = PropsWithChildren;

export const SearchLayout = ({children}: Props) => {
  return (
    <>
      <MetaHead/>
      <div className={styles.appLayout}>
        <AppLanding/>
        <div className={styles.appContainer}>
          <main className={styles.appMainContainer}>
            {children}
          </main>
          <ModalContainer/>
          <NavBarBottom/>
        </div>
      </div>
    </>
  )
}