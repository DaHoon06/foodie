import {PropsWithChildren, ReactElement} from "react";
import MetaHead from "./heads/MetaHead";
import * as styles from "@layouts/AppLayout.css";
import {AppLanding} from "@layouts/landing/AppLading";

type Props = PropsWithChildren;

export const AppLayout = ({children}: Props): ReactElement => {
  return (
    <>
      <MetaHead/>
      <div className={styles.appLayout}>
        <AppLanding/>
        <main>
          {children}
        </main>
      </div>

    </>
  )
}