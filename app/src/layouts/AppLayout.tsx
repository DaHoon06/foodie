import {PropsWithChildren, ReactElement} from "react";
import MetaHead from "./heads/MetaHead";

type Props = PropsWithChildren;

export const AppLayout = (props: Props): ReactElement => {
  return (
    <>
      <MetaHead/>
      <main>
        Layout
      </main>
    </>
  )
}