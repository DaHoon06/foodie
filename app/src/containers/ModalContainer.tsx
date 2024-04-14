import useModalStore from "@store/modalStore";
import { ModalHandler } from "@components/common/modal/ModalHandler";
import { SignInAlertBox } from "@components/common/alert-box/SignInAlertBox";
import { FeedLocation } from "@components/feeds/FeedLocation";

export const ModalContainer = () => {
  const { type } = useModalStore();
  return (
    <>
      <div id="modal" />
      <ModalHandler>
        {type === "signInAlertBox" && <SignInAlertBox />}
        {type === "registerShop" && <FeedLocation />}
      </ModalHandler>
    </>
  );
};
