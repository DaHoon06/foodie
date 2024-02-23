import React, {PropsWithChildren, ReactElement, ReactNode, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import {BottomSlideModal} from "@components/common/modal/slide/BottomSlide";
import useModalStore from "@store/modalStore";
import * as styles from './slide/BottomSlide.css';
import useModalHook from "@hooks/useModalHook";

type Modal = PropsWithChildren;

export type ModalProps = {
  isOpen: boolean;
  ele: Element | any;
} & Modal;

export const ModalHandler: React.FC<Modal> = (props) => {
  const {children} = props;
  const {isOpen} = useModalStore();
  const ele = useRef<HTMLDivElement>(null);

  const {outerClickEvent} = useModalHook(ele);

  const element =
    typeof window !== "undefined" &&
    (document.querySelector("#modal") as HTMLDivElement);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  if (!element) return null;

  const modalHandler = (children: ReactNode): ReactElement => {
    return (
      <>
        <div className={styles.modalBackGroundLayer} onClick={outerClickEvent}
             style={{
               opacity: isOpen ? '1' : '0',
               visibility: isOpen ? 'visible' : 'hidden'
             }}/>
        <BottomSlideModal ele={ele} isOpen={isOpen}>
          {children}
        </BottomSlideModal>
      </>
    )
  };
  return <>{ReactDOM.createPortal(modalHandler(children), element)}</>
}

